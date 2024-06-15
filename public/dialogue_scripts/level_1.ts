import { Level, DialogueLine, Flag, Preview, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_1_1: Level = {
    main_chapter: 1,
    sub_chapter: 1,
    title: "Code Herunterladen",
    dialogue_lines: [
        {
            content : "Um an einem Projekt aus einem Repository zu arbeiten, müssen wir erst an den Code kommen."
        },
        {
            content : "Um den aktuellen Code herunterzuladen, führen wir git clone aus."
        },
        {
            content : "Versuchen wir es einmal in der Konsole!",
            required_flag : FlagKeywords.GIT_CLONE
        },
        {
            content : "Wie du sehen kannst, haben wir jetzt die Grundlage unseres Burgers hier, und eine Bestellung!"
        },
        {
            content : "Im nächsten Schritt werden wir ein paar Dateien hinzufügen."
        }
    ],
    flags: [
        {
            id: 0,
            keyword: FlagKeywords.GIT_CLONE
        }
    ],
    backgrounds: [
        "/assets/asset-placeholder-gitpull.png",
        "/assets/asset-placeholder-gitstatus.png"
    ],
    preview : {
        description : "Ein erster Einstieg, der zeigen soll, wie man anfangen kann zu Coden und Remote Code herunterzuladen.",
        thumbnail_img_path : "/assets/asset-placeholder-gitpull.png"
    }
};
      
export const chapter_1_2 : Level = {
    main_chapter : 1,
    sub_chapter : 2,
    title : "Dateien Hinzufügen",
    dialogue_lines : [
        {
            content : "Um unserem Burger eine Zutat hinzuzufügen, führen wir git add aus."
        },
        {
            content : "Add fügt eine Datei an der du arbeitest dem aktuellem Commit hinzu."
        },
        {
            content : "Stelle dir einen Commit wie ein Paket vor, in dem wir alle Dateien an denen wir gearbeitet haben verpacken."
        },
        {
            content : "Lass und die gewünschten Zutaten eine nach der anderen hinzufügen!",
            required_flag : FlagKeywords.GIT_ADD_FLEISCH
        },
        {
            content : "Gut, aber der Burger sieht noch ein bisschen leer aus. Vielleicht fehlt noch etwas Farbe.",
            required_flag : FlagKeywords.GIT_ADD_TOMATE
        },
        {
            content : "Sehr gut! Der Burger sieht doch schon einmal ganz lecker aus."
        },
        {
            content : "Alternativ kannst du auch mit git add . alle Dateuen auf einmal hinzufügen, die du verändert hast."
        },
        {
            content : "Im besten Fall möchtest du aber darüber nachdenken, welche Änderungen du noch nicht speichern willst."
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_ADD_FLEISCH
        },
        {
            id : 0,
            keyword : FlagKeywords.GIT_ADD_TOMATE
        }
    ],
    backgrounds : [
        "/assets/asset-placeholder-gitadd.png", 
        "/assets/asset-placeholder-gitadd.png"
    ],
    preview : {
        description : "In diesem Kapitel fügen wir Dateien unserem Commit hinzu.",
        thumbnail_img_path : "/assets/asset-placeholder-gitadd.png"
    }
}

export const chapter_1_3 : Level = {
    main_chapter : 1,
    sub_chapter : 3,
    title : "Status Abfragen",
    dialogue_lines : [
        {
            content : "Sieht so aus als hättest du alle gewünschten Zutaten auf deinem Burger!"
        },
        {
            content : "Um zu sehen, welche Dateien wir verändert haben, oder ob etwas neu dazugekommen oder gelöscht ist, führen wir git status aus."
        },
        {
            content : "Git status markiert in der Konsole alle Dateien die sich seit dem letzten commit unterscheiden."
        },
        {
            content : "Versuchen wir es einmal!",
            required_flag : FlagKeywords.GIT_STATUS
        },
        {
            content : "Wie du sehen kannst, ist hier neu dazugekommen eine Tomate und das Fleisch."
        },
        {
            content : "In den meisten Fällen wirst du wahrscheinlich bereits vorhandene Dateien weiter bearbeiten oder verändern."
        },
        {
            content : "Dann wird statt new file ein changed anzeigt."
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_STATUS
        }
    ],
    backgrounds : [
        "/assets/asset-placeholder-gitstatus.png"
    ],
    preview : {
        description : "Wir fragen unseren aktuellen Status ab, und sehen uns an, welche Dateien hinzugefügt wurden.",
        thumbnail_img_path : "/assets/asset-placeholder-gitstatus.png"
    }
}