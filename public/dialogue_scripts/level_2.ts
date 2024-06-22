import { Level, DialogueLine, Flag, Preview, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_2_1: Level = {
    main_chapter: 2,
    sub_chapter: 1,
    title: "Neuen Branch Erstellen",
    dialogue_lines: [
        {
            content: "Wir sind nicht mehr alleine in der Küche."
        },
        {
            content: "Obwohl es große Überwindungen gekostet hat, brauchen wir wohl doch ein bisschen Unterstützung."
        },
        {
            content: "Aber wir können wohl kaum beide gleichzeitig an einem Tisch arbeiten."
        },
        {
            content: "Am besten machen wir unserem neuen Koch ein bisschen Platz, und kochen erst mal woanders weiter."
        },
        {
            content: "Hierzu möchten wir die Arbeitsplatte, unseren $ wechseln.",
            highlighted : "Branch"
        },
        {
            content: "Hierzu benutzen wir $ um einen neuen Branch zu eröffnen.",
            highlighted : `git checkout -b "<Unser Branchnames>" `
        },
        {
            content: "Du kannst deinem Branch einen Namen deiner Wahl geben."
        },
        {
            content: "In diesem Tutorial werden wir unseren Branch $ nennen.",
            highlighted : "dev"
        },
        {
            content : "Versuchen wir einmal den neuen Branch zu erstellen.",
            required_flag: FlagKeywords.GIT_CHECKOUT_B
        },
        {
            content : "Sehr gut! Wie du siehst, haben wir mit dem erstellen des Branches auch direkt zum Branch gewechselt.",
        },
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.GIT_CHECKOUT_B
        }
    ],
    backgrounds: [
        "/assets/initial_empty.png", 
        "/assets/after_push_happy.png"
    ],
    preview: {
        description: "...In dem wir eine neue Arbeitsfläche schaffen.",
        thumbnail_img_path: "/assets/initial_empty.png"
    }
};

export const chapter_2_2 : Level = {
    main_chapter : 2,
    sub_chapter : 2,
    title : "Auf Branch Arbeiten",
    dialogue_lines : [
        {
            content : "Auf unserem neuem Branch können wir wie gewohnt arbeiten."
        },
        {
            content : "Versuchen wir einmal einen normalen Commit durchzulaufen."
        },
        {
            content : "Hierzu überspringen wir clone und pull, da wir bisher noch nicht am Branch gearbeitet haben."
        },
        {
            content : "Fangen wir am Besten wieder damit an, unsere Zutaten hinzuzufügen.",
            required_flag : FlagKeywords.GIT_ADD_FLEISCH
        },
        {
            content : "Sehr gut! Weiter geht's."
        },
        {
            content : "Wenn du eine Erinnerung an die Reihenfolge der Kommandos brauchst, kannst du immer auf Hilfe klicken.",
            required_flag : FlagKeywords.GIT_COMMIT
        },
        {
            content : "Sehr gut, und dann noch fertigstellen.",
            required_flag : FlagKeywords.GIT_PUSH
        },
        {
            content : "Und damit haben wir eine neue Bestellung auf unseren Branch gepusht!"
        },
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_PUSH
        }
    ],
    backgrounds : [

    ],
    preview : {
        description : "...In dem wir eine normale Bestellung auf unserer neuen Arbeitsfläche erstellen.",
        thumbnail_img_path : ""
    }
}

export const chapter_2_3 : Level = {
    main_chapter : 2,
    sub_chapter : 3,
    title : "Branch Wechseln",
    dialogue_lines : [
        {
            content : "Schön hier in unserer kleinen Arbeitsfläche."
        },
        {
            content : "Für unseren nächsten Schritt müssen wir allerdings wieder auf unseren main branch wechseln."
        },
        {
            content : "Im letzten Schritt haben wir $ benutzt, um einen neuen Branch zu erstellen.",
            highlighted : `git checkout -b "dev"`
        },
        {
            content : "Nun möchten wir das -b weglassen, um zu signalisieren, dass wir auf einen bereits existierenden Branch wechseln."
        },
        {
            content : "Versuche nun wieder auf den main Branch zu wechseln.",
            required_flag : FlagKeywords.GIT_CHECKOUT_NAME
        },
        {
            content : "Sehr gut, jetzt sind wir wieder an unserem Hauptbranch!"
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_CHECKOUT_NAME
        }
    ],
    backgrounds : [

    ],
    preview : {
        description : "...In dem wir zurück auf andere Branches wechseln.",
        thumbnail_img_path : ""
    }
}