import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export async function TextTranslation(subtitle, language, translateTo, res) {
  const apiKey = process.env.TRANSLATION_API_KEY;
  const endpoint = process.env.TRANSLATION_API_ENDPOINT;
  const region = process.env.TRANSLATION_API_REGION;

  console.log("== Text translation ==");

  const inputText = [];
  for (const subt of subtitle) {
    inputText.push({ text: subt.text });
  }

  let params = new URLSearchParams();
  params.append("api-version", "3.0");
  params.append("from", language);
  params.append("to", translateTo);

  axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      // location required if you're using a multi-service or regional (not global) resource.
      "Ocp-Apim-Subscription-Region": region,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: params,
    data: inputText,
    responseType: "json",
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data, null, 4));

      subtitle.map((subt, index) => {
        subt.text = response.data[index].translations[0].text;
      });

      res.json(subtitle);
    })
    .catch(function (error) {
      console.log(error);
      res.json(subtitle);
    });
}
