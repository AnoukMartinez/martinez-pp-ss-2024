export interface DialogueLine {
  content : string;
  required_flag? : string;
}

export interface Level {
  main_chapter : number;
  sub_chapter : number;
  title : string;
  dialogue_lines : Array<DialogueLine>;
  flags : Array<string>;
}
