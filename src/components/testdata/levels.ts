import { Level, DialogueLine, Flag, FlagKeywords } from '../DialogueLine.ts'

const dialogue1 : DialogueLine = { content : "Wir sind in Level 1" }
const dialogue2 : DialogueLine = { content : "Versuchen wir doch einmal git pull aufzurufen.", required_flag : FlagKeywords.GIT_PULL }
const dialogue3 : DialogueLine = { content : "Wow, wir haben jetzt einen Burger!" }
const dialogue4 : DialogueLine = { content : "Jetzt muss noch git status aufgerufen werden!", required_flag : FlagKeywords.GIT_STATUS }

const dialogue5 : DialogueLine = { content : "Hier beginnt Aufgabe 2" }
const dialogue6 : DialogueLine = { content : "Und weiter geht es mit Aufgabe 2" }
const dialogue7 : DialogueLine = { content : "Hier bitte git add fleisch eingeben..." }
const dialogue8 : DialogueLine = { content : "Sehr gut! Fleisch wurde hinzugefügt.", required_flag : FlagKeywords.GIT_ADD_FLEISCH }
const dialogue9 : DialogueLine = { content : "Jetzt bitte tomate hinzufügen." }
const dialogue10 : DialogueLine = { content : "Und damit ist die Tomate dabei, und Aufgabe 2 zuende.", required_flag : FlagKeywords.GIT_ADD_TOMATE }

const dialogue11 : DialogueLine = { content : "Hier steht Aufgabe 3" }
const dialogue12 : DialogueLine = { content : "Die letzte unserer Beispielaufgaben" }
const dialogue13 : DialogueLine = { content : "Führe git status aus um die aufgabe zu beenden (platzhalter)" }
const dialogue14 : DialogueLine = { content : "Und das war es mit den Test Daten. Bald gehts weiter mit echten Daten.", required_flag : FlagKeywords.GIT_STATUS }

const flag1 : Flag = { id : 0, keyword : FlagKeywords.GIT_PULL }
const flag2 : Flag = { id : 0, keyword : FlagKeywords.GIT_ADD_FLEISCH }
const flag3 : Flag = { id : 0, keyword : FlagKeywords.GIT_ADD_TOMATE }
const flag4 : Flag = { id : 0, keyword : FlagKeywords.GIT_STATUS }

export const level_1_1 : Level = { 
    main_chapter : 1, 
    sub_chapter : 1, 
    title : "GIT PULL", 
    dialogue_lines : [dialogue1, dialogue2, dialogue3, dialogue4], 
    flags : [flag1, flag4],
    backgrounds : ['../../assets/asset-placeholder-gitpull.png']
}
export const level_1_2 : Level = { 
    main_chapter : 1, 
    sub_chapter : 2, 
    title : "GIT ADD", 
    dialogue_lines : [dialogue5, dialogue6, dialogue7, dialogue8, dialogue9, dialogue10], 
    flags : [flag2, flag3],
    backgrounds : ['../../assets/asset-placeholder-gitadd.png']
}
export const level_1_3 : Level = { 
    main_chapter : 1, 
    sub_chapter : 3, 
    title : "GIT STATUS", 
    dialogue_lines : [dialogue11, dialogue12, dialogue13, dialogue14], 
    flags : [flag4],
    backgrounds : ['../../assets/asset-placeholder-gitstatus.png']
}