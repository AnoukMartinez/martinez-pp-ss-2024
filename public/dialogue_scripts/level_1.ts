import { MagicString } from "../../../../../AppData/Local/deno/npm/registry.npmjs.org/@vue/compiler-sfc/3.4.27/dist/compiler-sfc.d.ts";
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
            content : "Um das aktuelle Repository herunterzuladen, führen wir git clone aus."
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
        "/assets/asset-placeholder-gitclone-before.png",
        "/assets/asset-placeholder-gitclone-after.png"
    ],
    preview : {
        description : "Ein erster Einstieg, der zeigen soll, wie man anfangen kann zu Coden und Remote Code herunterzuladen.",
        thumbnail_img_path : "/assets/asset-placeholder-gitclone-before.png"
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
            required_flag : FlagKeywords.GIT_ADD_SALAT
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
            keyword : FlagKeywords.GIT_ADD_SALAT
        }
    ],
    backgrounds : [
        "/assets/asset-placeholder-gitclone-after.png", 
        "/assets/asset-placeholder-gitadd-1.png",
        "/assets/asset-placeholder-gitadd-2.png"
    ],
    preview : {
        description : "In diesem Kapitel fügen wir Dateien unserem Commit hinzu.",
        thumbnail_img_path : "/assets/asset-placeholder-gitadd-1.png"
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
        "/assets/asset-placeholder-gitadd-2.png",
        "/assets/asset-placeholder-gitstatus.png"
    ],
    preview : {
        description : "Wir fragen unseren aktuellen Status ab, und sehen uns an, welche Dateien hinzugefügt wurden.",
        thumbnail_img_path : "/assets/asset-placeholder-gitstatus.png"
    }
}

export const chapter_1_4 : Level = {
    main_chapter : 1,
    sub_chapter : 4,
    title : "COMMIT ABSCHLIEßEN",
    dialogue_lines : [
        {
            content : "Stelle dir vor, wir haben alle unsere Zutaten dem Burger hinzugefügt."
        },
        {
            content : "Jetzt möchten wir unsere fertige Bestellung verpacken und abschicken."
        },
        {
            content : "Um einen commit abzuschließen benutzen wir git commit -m."
        },
        {
            content : "Hinter -m kommt ein String, in dem du möglichst präzise beschreiben solltest, was du geändert hast."
        },
        {
            content : "Die Message kannst du dir selber ausdenken, aber denke daran dass andere Leute, die mit dir zusammen arbeiten auf einen Blick sehen sollten, was du geschafft hast."
        },
        {
            content : "Versuche es einmal!",
            required_flag : FlagKeywords.GIT_COMMIT
        },
        {
            content : "Leider hat dieses Spiel nicht genug Entwickler um zu prüfen ob deine Nachricht Sinn macht..."
        },
        {
            content : "Aber nehmen wir einfach mal an dass du dir ganz viel Mühe gegeben hast."
        },
        {
            content : "Commits sollten kurz und präzise sein. Wenn du viel zu sagen hast, aber keinen ganzen Roman als Commit Überschrift schreiben möchtest, kannst du noch eine Beschreibung hinzufügen."
        },
        {
            content : "Benutze dazu einfach eine zweite -m Flagge."
        },
        {
            content : 'Diese könnte so aussehen: git commit -m "\(Hier deine Überschrift)"\ -m "\(Hier deine detailliertere Beschreibung)"\.'
        },
        {
            content : "Ob dein Projekt Extra Beschreibungen nutzen möchte, sollte bei jedem Projekt mit deinen Team Mitgliedern abgesprochen werden."
        },
        {
            content : "Im besten Fall machst du kurze Commits nach jeder Änderung, die nur kleine Beschreibungen erfordern."
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_COMMIT
        }
    ],
    backgrounds : [
        "/assets/asset-placeholder-gitadd-2.png",
        "/assets/asset-placeholder-gitcommit.png"
    ],
    preview : {
        description : "Wir benennen einen commit und verpacken unsere Bestellung.",
        thumbnail_img_path : "/assets/asset-placeholder-gitstatus.png"
    }
}

export const chapter_1_5 : Level = {
    main_chapter : 1,
    sub_chapter : 5,
    title : "Commit Abschicken",
    dialogue_lines : [
        {
            content : "Wir sind fast am Ende der Basics."
        },
        {
            content : "Wir haben jetzt unsere Änderungen vorgenommen, diese dem Commit hinzugefügt, und diesen schön verpackt."
        },
        {
            content : "Ein wichtiger Schritt der jetzt noch fehlt, ist den Commit auch an das Remote Repository abzuschicken."
        },
        {
            content : "Wir nutzen hierzu einfach git push. Wir schieben unser Paket weg."
        },
        {
            content : "Probieren wir es aus.",
            required_flag : FlagKeywords.GIT_PUSH
        },
        {
            content : "Und damit ist unser Working Tree, also unsere Arbeitsfläche wieder frei."
        },
        {
            content : "Herzlichen Glückwunsch, du hast gerade einen kompletten Commit durchgespielt!"
        },
        {
            content : "Damit hast du das erste Kapitel jetzt komplett abgeschlossen."
        },
        {
            content : "Bisher ist es noch schön ruhig in der Küche. Aber das wird sich bald ändern..."
        },
        {
            content : "Im nächsten Kapitel wird es um Branching und Teamarbeit gehen."
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_PUSH
        }
    ],
    backgrounds : [
        "/assets/asset-placeholder-gitcommit.png",
        "/assets/asset-placeholder-gitclone-before.png"
    ],
    preview : {
        description : "Wir beenden unseren Commit und räumen unsere Arbeitsfläche wieder frei für neue Arbeit!",
        thumbnail_img_path : "/assets/asset-placeholder-commit.png"
    }
}