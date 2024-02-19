async function NormalizeSubtitle(subtiles) {
  // break the text into words and calculate the duration of each word
  subtiles.map((subtitle, idx) => {
    const words = subtitle.text.split(" ");
    if(words.length === 1) return;
    const duration = subtitle.duration / words.length;
    const normalizedSubtitles = words.map((word, idx) => {
      return {
        text: word,
        offset: subtitle.offset + idx * duration,
        duration: duration,
        start: subtitle.offset + idx * duration,
        end: subtitle.offset + (idx + 1) * duration,
      };
    });
    subtiles.splice(idx, 1, ...normalizedSubtitles);
  });
}

async function CheckAndInsertInArray(CurResult, FinalResult) {
  if (FinalResult.length === 0) {
    FinalResult.push({
      fullLine: CurResult.text,
      text: CurResult.text,
      offset: CurResult.offset,
      pastOffset: CurResult.offset,
      duration: CurResult.duration,
      pastDuration: CurResult.duration,
      start: CurResult.offset,
      end: CurResult.offset + CurResult.duration,
    });
  } else {
    const top = FinalResult[FinalResult.length - 1];

    if (CurResult.offset !== top.pastOffset) {
      FinalResult.push({
        fullLine: CurResult.text,
        text: CurResult.text,
        offset: CurResult.offset,
        pastOffset: CurResult.offset,
        duration: CurResult.duration,
        pastDuration: CurResult.duration,
        start: CurResult.offset,
        end: CurResult.offset + CurResult.duration,
      });
    } else {
      const splittedCur = CurResult.text.split(" ");
      const splittedTop = top.fullLine.split(" ");

      const CurWordLength = splittedCur.length;
      const FinalWordLength = splittedTop.length;

      if (CurWordLength === FinalWordLength) {
        FinalResult[FinalResult.length - 1].text =
          splittedCur[splittedCur.length - 1];
        FinalResult[FinalResult.length - 1].fullLine = CurResult.text;

        FinalResult[FinalResult.length - 1].pastDuration = CurResult.duration;

        FinalResult[FinalResult.length - 1].duration =
          CurResult.duration - (top.pastOffset + top.pastDuration);
        FinalResult[FinalResult.length - 1].end =
          CurResult.offset + CurResult.duration;
      } else if (CurWordLength > FinalWordLength) {
        const textToBeInserted = splittedCur.slice(FinalWordLength).join(" ");
        FinalResult.push({
          fullLine: CurResult.text,
          text: textToBeInserted,
          offset: top.pastOffset + top.pastDuration,
          pastOffset: CurResult.offset,
          duration:
            CurResult.duration -
            (top.pastOffset + top.pastDuration - CurResult.offset),
          pastDuration: CurResult.duration,
          start: top.pastOffset + top.pastDuration,
          end: CurResult.offset + CurResult.duration,
        });
      } else {
        console.log("This should not happen");
      }
    }
  }
}

export { CheckAndInsertInArray, NormalizeSubtitle };
