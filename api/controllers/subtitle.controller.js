import { AssemblyAI } from "assemblyai";

const TranscribeProject = async (audioUrl, language) => {
  const assemblyClient = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_AI_API_KEY,
  });

  const audioUrlTemp =
    "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

  console.log(language);
  const config = {
    audio: audioUrl,
    language_code: language,
  };

  try {
    const transcript = await assemblyClient.transcripts.transcribe(config);
    console.log(transcript);
    return transcript;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export { TranscribeProject };
