import { DialogueLine, Level } from '../DialogueLine.ts';

// Looks a bit messy now, but will get extracted from a JSON later.
const line_one = new DialogueLine('This is a dialogue line.');
const line_two = new DialogueLine('And yet another dialogue line.');
const line_three = new DialogueLine('Can we get even more?');
const line_four = new DialogueLine('No, this is the last one...');

const line_1_chapter_1_1 = new DialogueLine('Hey, we are in a different chapter now!');
const line_2_chapter_1_1 = new DialogueLine('Amazing... A second level!');

const dialogue_lines_level_1_0 = [line_1_chapter_1_1, line_2_chapter_1_1];

export const dialogue_lines = [line_one, line_two, line_three, line_four];
export const level_one = new Level(1, 1, dialogue_lines);
export const level_two = new Level(1, 2, dialogue_lines_level_1_0);
