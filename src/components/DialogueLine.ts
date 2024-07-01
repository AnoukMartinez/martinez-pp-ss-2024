export enum FlagKeywords {
  GIT_PULL = "git pull",
  GIT_ADD_FLEISCH = "git add patty.js",
  GIT_ADD_SALAT = "git add salat.png",
  GIT_STATUS = "git status",
  GIT_COMMIT = `git commit -m "(Hier deine Nachricht)"`,
  GIT_PUSH = "git push",
  GIT_CLONE = "git clone https://github.com/AnoukMartinez/martinez-pp-ss-2024",
  TUTORIAL = "hallo welt",
  GIT_CHECKOUT_B = "git checkout -b dev",
  GIT_CHECKOUT_NAME = "git checkout main",
  GIT_BRANCH = "git branch"
}

export interface Flag {
  id : number,
  keyword : FlagKeywords,
  hint? : string
}

export interface DialogueLine {
  content : string;
  required_flag? : string;
  highlighted? : string;
}

export interface Preview {
  description : string,
  thumbnail_img_path : string
}

export interface Level {
  main_chapter : number;
  sub_chapter : number;
  title : string;
  dialogue_lines : Array<DialogueLine>;
  flags : Array<Flag>;
  backgrounds : Array<string>;
  preview : Preview;
}