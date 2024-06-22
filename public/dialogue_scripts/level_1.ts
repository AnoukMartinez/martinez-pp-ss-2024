import { Level, DialogueLine, Flag, Preview, FlagKeywords } from '../../src/components/DialogueLine.ts'

export const chapter_1_1: Level = {
    main_chapter: 1,
    sub_chapter: 1,
    title: "Repository Neu Herunterladen",
    dialogue_lines: [
        {
            content : "Um an einem existierendem Projekt aus einem Repository zu arbeiten, müssen wir erst den Code herunterladen."
        },
        {
            content : "Um ein neues Repository herunterzuladen, benutzen wir $.",
            highlighted : "clone"
        },
        {
            content : "Wir führen $ aus.",
            highlighted : "git clone <Link zum Repository>"
        },
        {
            content : "Das Repository wird dann in den Ordner kopiert, in dem sich die Konsole momentan befindet."
        },
        {
            content : "Für dieses Tutorial stellen wir einen Link zu einem fiktionalem Repository zur Verfügung, den du kopieren musst."
        },
        {
            content : "Denke daran $, und dann den Link zum Repository.",
            highlighted : "git clone"
        },
        {
            content : "Versuchen wir es einmal in der Konsole!",
            required_flag : FlagKeywords.GIT_CLONE
        },
        {
            content : "Wie du sehen kannst, haben wir jetzt die Grundlage unseres Burgers hier, und ein paar Zutaten mit denen wir arbeiten können."
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
        "/assets/initial_empty.png",
        "/assets/initial_clone.png"
    ],
    preview : {
        description : "Ein erster Einstieg, der zeigen soll, wie man anfangen kann zu Coden und Remote Code herunterzuladen.",
        thumbnail_img_path : "/assets/asset-placeholder-gitclone-before.png"
    }
};

export const chapter_1_2 : Level = {
    main_chapter : 1,
    sub_chapter : 2,
    title : "Aktuellen Fortschritt Ziehen",
    dialogue_lines : [
        {
            content : "Bei der Arbeit an einem Repository ist es wichtig, immer auf dem neuesten Stand zu bleiben."
        },
        {
            content : "Es reicht nicht aus, das Repository auf deinem Rechner zu haben."
        },
        {
            content : "Es kann nämlich sein, dass dein lokaler Stand schon veraltet ist."
        },
        {
            content : "Daher solltest du immer bevor du anfängst zu arbeiten einmal $ ausführen.",
            highlighted : "git pull"
        },
        {
            content : "Schauen wir doch einmal, ob wir auf dem neuesten Stand sind. Führe jetzt das Kommando aus!",
            required_flag : FlagKeywords.GIT_PULL
        },
        {
            content : "Oh, da hat sich tatsächlich etwas getan!"
        },
        {
            content : "Diese Bestellung war vorher noch nicht hier."
        },
        {
            content : "Na dann wollen wir mal den gewünschten Burger herstellen!"
        }
    ],
    flags : [
        {
            id : 0,
            keyword : FlagKeywords.GIT_PULL
        }
    ],
    backgrounds: [
        "/assets/initial_clone.png",
        "/assets/initial_pull.png"
    ],
    preview : {
        description : "Wir ziehen uns den aktuellen Fortschritt und updaten unser Repository.",
        thumbnail_img_path : "/assets/initial_clone.png"
    }
}
      
export const chapter_1_3 : Level = {
    main_chapter : 1,
    sub_chapter : 3,
    title : "Dateien Hinzufügen",
    dialogue_lines : [
        {
            content : "Um unserem Burger eine Zutat hinzuzufügen, führen wir $ aus.",
            highlighted : "git add"
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
            content : "Alternativ kannst du auch mit $ alle Dateuen auf einmal hinzufügen, die du verändert hast.",
            highlighted : "git add ."
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
            id : 1,
            keyword : FlagKeywords.GIT_ADD_SALAT
        }
    ],
    backgrounds : [
        "/assets/add_instructions.png", 
        "/assets/add_meat.png",
        "/assets/add_meat_and_salad.png"
    ],
    preview : {
        description : "In diesem Kapitel fügen wir Dateien unserem Commit hinzu.",
        thumbnail_img_path : "/assets/add_instructions.png"
    }
}

export const chapter_1_4 : Level = {
    main_chapter : 1,
    sub_chapter : 4,
    title : "Status Abfragen",
    dialogue_lines : [
        {
            content : "Sieht so aus als hättest du alle gewünschten Zutaten auf deinem Burger!"
        },
        {
            content : "Um zu checken, welche Dateien wir verändert haben, oder ob etwas neu dazugekommen oder gelöscht ist, führen wir $ aus.",
            highlighted : "git status"
        },
        {
            content : "$ markiert in der Konsole alle Dateien die sich seit dem letzten commit unterscheiden.",
            highlighted : "git status"
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

export const chapter_1_5 : Level = {
    main_chapter : 1,
    sub_chapter : 5,
    title : "Commit Abschliessen",
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
        "/assets/commit_plus_message.png"
    ],
    preview : {
        description : "Wir benennen einen commit und verpacken unsere Bestellung.",
        thumbnail_img_path : "/assets/asset-placeholder-gitstatus.png"
    }
}

export const chapter_1_6 : Level = {
    main_chapter : 1,
    sub_chapter : 6,
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
        "/assets/commit_plus_message.png",
        "/assets/after_push_happy.png"
    ],
    preview : {
        description : "Wir beenden unseren Commit und räumen unsere Arbeitsfläche wieder frei für neue Arbeit!",
        thumbnail_img_path : "/assets/asset-placeholder-commit.png"
    }
}