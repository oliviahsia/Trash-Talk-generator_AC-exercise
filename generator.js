function trashTalkGenerate(result) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  const taskRandomIndex = Math.floor(Math.random() * 4);
  const phraseRandom = phrase[Math.floor(Math.random() * phrase.length)];

  let trashTalk = `身為一個，${result.target}，`;
  const error = "This something wrong!";

  //Target with specific task and with any phrase

  if (result.target === "engineer") {
    trashTalk += task.engineer[taskRandomIndex] + phraseRandom;
  } else if (result.target === "designer") {
    trashTalk += task.designer[taskRandomIndex] + phraseRandom;
  } else if (result.target === "entrepreneur") {
    trashTalk += task.entrepreneur[taskRandomIndex] + phraseRandom;
  } else {
    return error;
  }

  //generate trash talk
  return trashTalk;
}

module.exports = trashTalkGenerate;
