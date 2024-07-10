import { Level, DialogueLine, Flag, Preview, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_0_1: Level = {
    main_chapter: 0,
    sub_chapter: 1,
    title: "Tutorial",
    dialogue_lines: [
        {
            content: "Hier ist ein kleines, noch nicht fertiges Tutorial."
        },
        {
            content: "In diesem Spiel werden wir verschiedene Git Kommandos vorstellen."
        },
        {
            content: "Anschließend darfst du die Kommandos in einer Konsole, die du rechts sehen kannst ausprobieren."
        },
        {
            content: "Bitte gebe jetzt $ ein.",
            required_flag: FlagKeywords.TUTORIAL,
            highlighted : "hallo welt"
        },
        {
            content: "Wenn du einmal feststeckst, kannst dir links auf dem Skript Button alle Texte in diesem Level ansehen."
        },
        {
            content: "Wenn du merkst, dass du ein Kommando schon kennst, kannst du entweder das aktuelle Level mit dem Skip Button überspringen, oder auf Levels ein anderes Level auswählen."
        },
        {
            content: "Sehr gut! Damit solltest du jetzt auf den Ernst des Lebens vorbereitet sein."
        }
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.TUTORIAL
        }
    ],
    backgrounds: [
        "/assets/initial_empty.png", 
        "/assets/after_push_happy.png"
    ],
    preview: {
        description: "Ein kleines Tutorial, dass dem Spieler Steuerungen beibringen soll.",
        thumbnail_img_path: "/assets/after_push_happy.png"
    }
};