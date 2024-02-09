import { readFileSync } from "fs";
import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
} from "microsoft-cognitiveservices-speech-sdk";
import { compareText } from "../utils/subtitleAlgorithms.js";

export function AudioTranscription(file_name, language = "en-US") {
  return new Promise((resolve, reject) => {
    const recognizedSpeech = []; // { text: string, offset: number, duration: number }[]
    let prevRecognizedSpeech = {};

    const speechConfig = SpeechConfig.fromSubscription(
      process.env.SPEECH_KEY,
      process.env.SPEECH_REGION
    );
    speechConfig.speechRecognitionLanguage = language;
    speechConfig.requestWordLevelTimestamps();

    let audioConfig = AudioConfig.fromWavFileInput(readFileSync(file_name));
    let speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

    speechRecognizer.recognizing = async (s, e) => {
      const text = e.result.text;
      const offset = e.result.offset;
      const duration = e.result.duration;

      const { result, isMatching } = await compareText(
        prevRecognizedSpeech.text,
        text
      );

      const currWord = result;
      let currDuration = duration;
      let currOffset = offset;
      if (isMatching) {
        currDuration = duration - prevRecognizedSpeech.duration;
        currOffset =
          prevRecognizedSpeech.offset + prevRecognizedSpeech.duration;
      }
      console.log(currWord);
      recognizedSpeech.push({
        text: currWord,
        offset: currOffset,
        duration: currDuration,
      });

      const recognizedSpeechInstance = { text, offset, duration };
      prevRecognizedSpeech = recognizedSpeechInstance;
    };

    speechRecognizer.recognized = (s, e) => {
      if (e.result.reason == sdk.ResultReason.RecognizedSpeech) {
        console.log(`RECOGNIZED: Text=${e.result.text}`);
      } else if (e.result.reason == sdk.ResultReason.NoMatch) {
        console.log("NOMATCH: Speech could not be recognized.");
      }
    };

    speechRecognizer.canceled = (s, e) => {
      console.log(`CANCELED: Reason=${e.reason}`);

      resolve(recognizedSpeech);

      if (e.reason == sdk.CancellationReason.Error) {
        console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
        console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
        console.log(
          "CANCELED: Did you set the speech resource key and region values?"
        );
      }

      speechRecognizer.stopContinuousRecognitionAsync();
    };

    speechRecognizer.sessionStopped = (s, e) => {
      console.log("\n    Session stopped event.");
      speechRecognizer.stopContinuousRecognitionAsync();
    };

    speechRecognizer.startContinuousRecognitionAsync();
  });
}
