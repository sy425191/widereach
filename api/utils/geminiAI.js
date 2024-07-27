async function RefineResultsWithAI(wordsJSON, model) {
  const prompt = `You are good AI bot, you understand language deeply and can combine words to make meaningful short sentences. you are given JSON list of words. Now your translated result will be used for adding overlay text to video, so one can understand what is being said in the video. 
perform these actions on the JSON data.

1. Club words together so it makes sense, 
Remember we have to overlay each object at a time, so club words in range of 3-7 words only. 
Also the start and end time accordingly.

Rule for merging words interval:
- the merged word will start with first word start time and end with last word end time.
- the merged word will have all the words in the interval combined together with space in between.
- the merged word will have confidence equal to the average confidence of all the words in the interval.
- do not merge words if the interval is more than 7 words.
- do not repeat merged words.

2. In each item, tag the important word with <b> tag like HTML.
Example: My name is <b> Mike </b>. I am a <b> developer </b>.

Authority: You can tweak the timestamp and confidence of the words to make the sentence more meaningful. Maximum limit is 1 second.

Note: Your output will directly be transferred as API response. So only return JSON object.

Following is the JSON List:

    ${JSON.stringify(wordsJSON, null, 2)}
`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  let respText = response.text();
  //   remove ```json and ``` from the response
  respText = respText.replace("```json", "");
  respText = respText.replace("```", "");
  console.log(prompt);
  console.log(respText);
  return JSON.parse(respText);
}

export { RefineResultsWithAI };
