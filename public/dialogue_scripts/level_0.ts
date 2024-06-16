import { Level, DialogueLine, Flag, Preview, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_0_1: Level = {
    main_chapter: 0,
    sub_chapter: 1,
    title: "Tutorial",
    dialogue_lines: [
        {
            content: "Hier ist ein kleines, noch nicht fertiges Tutorial"
        },
        {
            content: "Bitte gebe jetzt 'hallo welt' ein.",
            required_flag: FlagKeywords.TUTORIAL
        },
        {
            content: "Gut!"
        }
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.TUTORIAL
        }
    ],
    backgrounds: [
        "/assets/asset-placeholder-gitpull.png", 
        "/assets/asset-placeholder-gitadd.png"
    ],
    preview: {
        description: "Ein kleines Tutorial, dass dem Spieler Steuerungen beibringen soll.",
        thumbnail_img_path: "/assets/asset-placeholder-gitclone-before.png"
    }
};