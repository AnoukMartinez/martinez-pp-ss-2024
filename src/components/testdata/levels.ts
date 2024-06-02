import { Level } from '../DialogueLine.ts'
import { DialogueLine } from '../DialogueLine.ts'

// TODO: Parse JSON from dialogue_scripts and create Level Objects
const dialogue1 = new DialogueLine("Wir sind in Level 1")
const dialogue2 = new DialogueLine("Und immer noch")
const dialogue3 = new DialogueLine("Hier könnte eine Anleitung stehen zur Aufgabe 1")
const dialogue4 = new DialogueLine("Letzte Line von Aufgabe 1")

const dialogue5 = new DialogueLine("Hier beginnt Aufgabe 2")
const dialogue6 = new DialogueLine("Und weiter geht es mit Aufgabe 2")
const dialogue7 = new DialogueLine("Unc noch eine Line")
const dialogue8 = new DialogueLine("Ich mache das nur so lang damit ich mal sehen kann")
const dialogue9 = new DialogueLine("Wie das ganze in der Praxis aussehen wird")
const dialogue10 = new DialogueLine("Und damit ist Aufgabe 2 zuende")

const dialogue11 = new DialogueLine("Hier steht Aufgabe 3")
const dialogue12 = new DialogueLine("Die letzte unserer Beispielaufgaben")
const dialogue13 = new DialogueLine("Noch ein letztes Mal, Aufgabe 3")
const dialogue14 = new DialogueLine("Und das war es mit den Test Daten")

export const level_1_1 = new Level(1, 1, [dialogue1, dialogue2, dialogue3, dialogue4])
export const level_1_2 = new Level(1, 2, [dialogue5, dialogue6, dialogue7, dialogue8, dialogue9, dialogue10])
export const level_1_3 = new Level(1, 3, [dialogue11, dialogue12, dialogue13, dialogue14])