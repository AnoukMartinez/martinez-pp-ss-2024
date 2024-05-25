export class DialogueLine {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export class Level {
  main_chapter: number;
  sub_chapter: number;
  dialogue_lines: Array<DialogueLine>;

  constructor(main_chapter: number, sub_chapter: number, dialogue_lines: Array<DialogueLine>) {
    this.main_chapter = main_chapter;
    this.sub_chapter = sub_chapter;
    this.dialogue_lines = dialogue_lines;
  }
}
