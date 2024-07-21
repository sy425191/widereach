import axios from "axios";

const GetSubtitle = async (file, language, shouldTranslate, translateTo) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("language", language);
  formData.append("shouldTranslate", shouldTranslate);
  formData.append("translateTo", translateTo);
  const res = await axios.post("/subtitle", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export { GetSubtitle };
