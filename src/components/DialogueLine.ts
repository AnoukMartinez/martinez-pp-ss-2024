export enum FlagKeywords {
  GIT_PULL = "git pull",
  GIT_ADD_FLEISCH = "git add fleisch",
  GIT_ADD_TOMATE = "git add tomate",
  GIT_STATUS = "git status",
  GIT_COMMIT = "git commit -m",
  GIT_PUSH = "git push"
}

export interface Flag {
  id : number,
  keyword : FlagKeywords
}

export interface DialogueLine {
  content : string;
  required_flag? : string;
}

export interface Level {
  main_chapter : number;
  sub_chapter : number;
  title : string;
  dialogue_lines : Array<DialogueLine>;
  flags : Array<Flag>;
  backgrounds : Array<string>;
}
