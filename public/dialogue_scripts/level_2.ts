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
        {
            content : "Um eine Liste der Branches auszugeben, und zu sehen auf welchem Branch du dich momentan befindest, kannst du $ benutzen.",
            highlighted : "git branch"
        },
        {
            content : "Probieren wir es einmal aus und schauen was zurückgegeben wird.",
            required_flag : FlagKeywords.GIT_BRANCH
        }
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.GIT_CHECKOUT_B,
            hint : "Nicht Ganz. Denke an die -b Flagge, die signalisiert dass wir einen neuen Branch eröffnen möchten."
        },
        {
            id: 0,
            keyword: FlagKeywords.GIT_BRANCH,
        }
    ],
    backgrounds: [
        "/assets/initial_empty.png", 
        "/assets/after_push_happy.png"
    ],
    preview: {
        description: "Wir machen eine neue Arbeitsfläche auf, um uns nicht gegenseitig in die Quere zu kommen.",
        thumbnail_img_path: "/assets/initial_empty.png"
    }
};

export const chapter_2_2 : Level = {
    main_chapter : 2,
    sub_chapter : 2,
    title : "Auf Branch Arbeiten/Commit Workflow",
    dialogue_lines : [
        {
            content : "Auf unserem neuem Branch können wir wie gewohnt arbeiten."
        },
        {
            content : "Versuchen wir doch einmal einen normalen Commit durchzulaufen, den wir im letzten Kapitel gelernt haben."
        },
        {
            content : "Hierzu überspringen wir clone, da wir unser Repo bereits gedownloaded haben, und git pull, da wir auf einem neuen Branch arbeiten der noch keine Commits haben kann."
        },
        {
            content : "(hier felt noch ein bisschen content, insbesondere das hintergrundbild aber ist noch wip)",
        },
        {
            content : "Fangen wir am Besten wieder damit an, unsere Zutaten aus der neuen Bestellung hinzuzufügen.",
            required_flag : FlagKeywords.GIT_ADD_FLEISCH
        },
        {
            content : "Sehr gut! Weiter geht's mit dem Verpacken des Commits."
        },
        {
            content : "Wenn du eine Erinnerung an die Reihenfolge der Kommandos brauchst, kannst du immer auf Hilfe klicken.",
            required_flag : FlagKeywords.GIT_COMMIT
        },
        {
            content : "Sehr gut, und dann noch abschicken.",
            required_flag : FlagKeywords.GIT_PUSH
        },
        {
            content : "Und damit haben wir eine neue Bestellung auf unseren Branch gepusht!"
        },
        {
            content : "Unser erstellter Branch ist jetzt auch auf dem Remote Repository für alle verfügbar."
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_ADD_FLEISCH,
            hint : "Nicht Ganz. Denke daran deine Zutaten mit den richtigen Dateiendungen hinzuzufügen."
        },
        {
            id : 1,
            keyword : FlagKeywords.GIT_COMMIT,
            hint : "Nicht Ganz. Bevor wir unseren Commit Abschicken, müssen wir diesen erst Verpacken und Benennen."
        },
        {
            id : 2,
            keyword : FlagKeywords.GIT_PUSH
        }
    ],
    backgrounds : [

    ],
    preview : {
        description : "Wir wiederholen das Gelernte aus dem ersten Kapitel und schließen einen normalen Commit auf unserem neuen Branch ab.",
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
            content : "Wir benutzen also nur $.",
            highlighted : "git checkout <Branchname>"
        },
        {
            content : "Versuche nun wieder auf den main Branch zu wechseln.",
            required_flag : FlagKeywords.GIT_CHECKOUT_NAME
        },
        {
            content : "Sehr gut, jetzt sind wir wieder an unserem Hauptbranch."
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
        description : "Wir wechseln wieder auf unseren Main Branch.",
        thumbnail_img_path : ""
    }
}