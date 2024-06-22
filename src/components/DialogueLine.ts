export enum FlagKeywords {
  GIT_PULL = "git pull",
  GIT_ADD_FLEISCH = "git add fleisch",
  GIT_ADD_SALAT = "git add salat",
  GIT_STATUS = "git status",
  GIT_COMMIT = "git commit -m",
  GIT_PUSH = "git push",
  GIT_CLONE = "git clone",
  TUTORIAL = "hallo welt",
  GIT_CHECKOUT_B = `git checkout -b "dev"`,
  GIT_CHECKOUT_NAME = `git checkout "dev"`
}

export interface Flag {
  id : number,
  keyword : FlagKeywords
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