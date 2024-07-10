import { Level, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_final: Level = {
    main_chapter: 3,
    sub_chapter: 1,
    title: "Final Chapter",
    dialogue_lines: [
        {
            content: "Das war's. Danke für's Playtesten! Hoffentlich kann ich eines Tages noch mehr Level machen."
        },
        {
            content: "Geplant ist noch Merge Konflikte, gitignore, und Umgehen mit API Keys."
        }
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.TUTORIAL
        }
    ],
    backgrounds: [
        "/assets/after_push_happy.png"
    ],
    preview: {
        description: "Das letzte Level, das den Spieler (Dich) Verabschiedet.",
        thumbnail_img_path: "/assets/after_push_happy.png"
    }
};