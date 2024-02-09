// [{"text":"you're my"},
// {"text":"girlfriend"},
// {"text":"and you're not going"},
// {"text":"to cater"},
// {"text":"to my every"},
// {"text":"need"},
// {"text":"oh"},

async function NormalizeSubtitle(subtiles) {}

async function compareText(prevStr, currStr) {
  currStr = currStr.replace(/(\r\n|\n|\r)/gm, "");
  if (prevStr == undefined || prevStr.length == 0) {
    return { result: currStr, isMatching: false };
  }

  const isSubstring = currStr.includes(prevStr);
  if (isSubstring) {
    const result = currStr.replace(prevStr, "").trim();
    return { result, isMatching: true };
  }
  return { result: currStr, isMatching: false };
}

export { compareText, NormalizeSubtitle };
