import { Level } from '../DialogueLine.ts'
import { DialogueLine } from '../DialogueLine.ts'

enum Flags {
    GIT_PULL = "git pull",
    GIT_ADD = "git add",
    GIT_STATUS = "git status",
    GIT_COMMIT = "git commit -m",
    GIT_PUSH = "git push"
}

const dialogue1 : DialogueLine = { content : "Wir sind in Level 1" }
const dialogue2 : DialogueLine = { content : "Und immer noch" }
const dialogue3 : DialogueLine = { content : "Hier könnte eine Anleitung stehen zur Aufgabe 1" }
const dialogue4 : DialogueLine = { content : "Das wird nur gezeigt wenn erfolgreich git pull aufgerufen wurde!", required_flag : Flags.GIT_PULL }

const dialogue5 : DialogueLine = { content : "Hier beginnt Aufgabe 2" }
const dialogue6 : DialogueLine = { content : "Und weiter geht es mit Aufgabe 2" }
const dialogue7 : DialogueLine = { content : "Hier bitte git add fleisch eingeben..." }
const dialogue8 : DialogueLine = { content : "Sehr gut! Fleisch wurde hinzugefügt.", required_flag : Flags.GIT_ADD + " fleisch" }
const dialogue9 : DialogueLine = { content : "Jetzt bitte tomate hinzufügen." }
const dialogue10 :DialogueLine = { content : "Und damit ist die Tomate dabei, und Aufgabe 2 zuende.", required_flag : Flags.GIT_ADD + " tomate" }

const dialogue11 : DialogueLine = { content : "Hier steht Aufgabe 3" }
const dialogue12 : DialogueLine = { content : "Die letzte unserer Beispielaufgaben" }
const dialogue13 : DialogueLine = { content : "Führe git status aus um die aufgabe zu beenden (platzhalter)" }
const dialogue14 : DialogueLine = { content : "Und das war es mit den Test Daten. Bald gehts weiter mit echten Daten.", required_flag : Flags.GIT_STATUS }

export const level_1_1 : Level = { main_chapter : 1, sub_chapter : 1, title : "GIT PULL", dialogue_lines : [dialogue1, dialogue2, dialogue3, dialogue4], flags : [Flags.GIT_PULL]}
export const level_1_2 : Level = { main_chapter : 1, sub_chapter : 2, title : "GIT ADD", dialogue_lines : [dialogue5, dialogue6, dialogue7, dialogue8, dialogue9, dialogue10], flags : [Flags.GIT_ADD + " fleisch", Flags.GIT_ADD + " tomate"] }
export const level_1_3 : Level = { main_chapter : 1, sub_chapter : 3, title : "GIT STATUS", dialogue_lines : [dialogue11, dialogue12, dialogue13, dialogue14], flags : [Flags.GIT_STATUS] }