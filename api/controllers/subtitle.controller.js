import { AssemblyAI } from "assemblyai";

const TranscribeProject = async (audioUrl, language) => {
  const assemblyClient = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_AI_API_KEY,
  });

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
