---
title: Git-Konsolenbefehle
description: description
---
# Git-Konsolenbefehle

### Täglich nützliche Befehle

- `git branch`: Listet alle lokalen Branches auf. Der aktuell verwendete Branch ist markiert.
- `git checkout -b 'branch-name'`: Wechselt den Branch und erstellt ihn, wenn er nicht existiert.
- `git checkout -`: Zurück in den zuletzt verwendeten Branch.
- `git pull origin 'branch-name'`: Holt die neuesten Änderungen aus dem Online-Branch.
- `git remote -v`: Zeigt entfernte Branches an.
- `git log`: Zeigt die Commit-Historie und die letzte Aktivität an.
- `git status`: Zeigt kürzlich vorgenommene Änderungen an.
- `git diff`: Zeigt detaillierte Änderungen an.
- `git add .`: Fügt alle Änderungen dem Staging-Bereich für den Commit hinzu.
- `git commit`: Commit von Änderungen, öffnet einen Texteditor (in der Regel vi) zur Eingabe einer Beschreibung und Details.
- `git commit -m "Beschreibung"`: Commit von Änderungen mit einer Beschreibung.
- `git push origin 'branch-name'`: Überträgt lokale Änderungen auf den Online-Branch.
- `git merge origin main`: Merged Änderungen aus dem 'main'-Branch in den aktuellen Branch.

### Branch-Verwaltung

- `git branch -d 'branch-name'`: Löscht einen lokalen Branch.
- `git push origin --delete 'branch-name'`: Löscht einen Remote-Branch.
- `git branch -m 'neuer-branch-name'`: Benennt den aktuellen Branch um.
- `git remote add 'remote-name' 'remote-url'`: Fügt ein neues Remote-Repository hinzu.
- `git remote set-url 'remote-name' 'neue-url'`: Ändert die URL eines Remote-Repositorys.

### Stash von Änderungen

- `git stash (save)`: Speichert Änderungen in einem temporären Stash.
- `git stash (save) 'Nachricht'`: Speichert Änderungen in einem temporären Stash mit einer Nachricht.
- `git stash -u`: Speichert Änderungen in einem temporären Stash incl. untracked files.
- `git stash pop`: Wendet den neuesten Stash an und entfernt ihn.
- `git stash apply`: Wendet den neuesten Stash an, ohne ihn zu entfernen.
- `git stash list`: Zeigt alle Stashes an.
- `git stash apply stash@{n}`: Wendet den gewählten Stash an, ohne ihn zu entfernen.
- `git stash drop stash@{n}`: Entfernt einen bestimmten Stash.
- `git stash branch 'neuer-branch' stash@{n}`: Erstellt einen neuen Branch aus einem Stash.
- `git stash clear`: Entfernt alle Stashes.

### Ändern, Rückgängigmachen und Wiederherstellen

- `git reset 'commit-hash'`: Änderungen aus dem Staging-Bereich nehmen, aber sie im Arbeitsverzeichnis behalten.
- `git reset --hard 'commit-hash'`: Setzt auf einen bestimmten Commit zurück und verwirft alle Änderungen.
- `git log --oneline`: Listet Hashes auf.
- `git revert 'commit-hash'`: Erstellt einen neuen Commit, der die Änderungen in einem vorherigen Commit rückgängig macht.
- `git clean -n`: Zeigt nicht verfolgte Dateien, die gelöscht werden würden.
- `git clean -f`: Entfernt nicht verfolgte Dateien und Verzeichnisse.
- `git commit --amend -m "neue Beschreibung"`: Ändert Beschreibung des letzten Commits!
- `git add . -> git commit --amend --no-edit`: Fügt Änderungen zum letzten Commit hinzu!
- `git log --graph --oneline --decoratre`: Zeigt den Branch-Verlauf an!

### Lokales Projekt auf Github hochladen

- `git init`: Lokales Projekt für git initialisieren
- `git add .`: Alle Daten für commit auswählen
- `git commit -m 'Initial Commit'`: Commit mit Beschreibung ausführen
- `git branch -M main`: Namen des Hauptbranches festlegen
- `git remote add origin git@github.com:... Link zu Github-Repo`: Vorher Github Repo anlegen
- `git push -u origin main`: Lokales Repo zu Github hochladen

### Lokalen main-Branch durch Remote ersetzen

- `git fetch origin`: Remote aktualisieren
- `git reset --hard origin/main`: Setzt den lokalen Main-Branch zurück und überschreibt ihn mit dem Remote-Main.
- `git clean -df`: Reste des alten local-Branches entfernen

### Aliases
- `git config --global alias.ac '!git add -A && git commit -m'`: Alias für "Add & Commit"
- `git config --global alias.pm 'push origin main'`: Alias für 'push origin main'!
- `git config --global alias.po 'push origin'`: Alias für 'push origin'!

### Shortcuts
- `git commit -am "Beschreibung"`: "git add ." automatisch mit eingefügt

### GitHub
- `>`: Auf Github Repo Seite: Live Editor!