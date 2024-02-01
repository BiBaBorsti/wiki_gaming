---
title: Laravel-Komponenten
description: description
sidebar:
  label: Komponenten
  order: 0
tableOfContents: true
---
Laravel ist ein PHP-Framework, das für seine effizienten Komponenten bekannt ist. Im Folgenden gibt es eine kleine Übersicht der Kernkomponenten, die später detaillierter erläutert werden.

## 1. **Routing**

Das Routing-System von Laravel gibt die Möglichkeit, die Routen für die Anwendung zu definieren. So funktioniert es:

- Routen in der Datei `routes/web.php` oder `routes/api.php` definieren.
- Routen Controllern und Methoden zuordnen.
- Middleware verwenden, um HTTP-Anfragen zu verarbeiten und Routen zu schützen.

## 2. **Controller**

Controller verarbeiten die HTTP-Anfragen der Anwendung. So funktionieren Controller:

- Erstelle Controller mit dem Artisan-Befehlszeilentool.
- Definiere Methoden innerhalb der Controller, um auf bestimmte Routen zu reagieren.
- Controller helfen, die Logik der Anwendung zu separieren.

## 3. **Modelle**

Modelle repräsentieren Datenbanktabellen und bieten eine objektorientierte Möglichkeit, mit den Daten zu interagieren. So funktionieren Modelle:

- Erstelle Modelle mit Artisan-Befehlen.
- Definiere Beziehungen zwischen Modellen (z.B. 1:1, 1:n, n:m).
- Verwende Eloquent, Laravels ORM, um die Datenbank abzufragen.

## 4. **Ansichten (Views)**

Views sind dafür verantwortlich, dem Benutzer Daten darzustellen. So funktionieren Views:

- Erstelle Blade-Templates im Verzeichnis `resources/views`.
- Verwende Vorlagen, um dynamische Daten aus Controllern anzuzeigen.
- Vorlagen wiederverwenden, um Layouts für ein konsistentes Design zu erweitern.

## 5. **Eloquent ORM**

Eloquent ist Laravels elegantes ORM zur Arbeit mit Datenbanken. So funktioniert Eloquent:

- Definiere Modelle, um mit Datenbanktabellen zu interagieren.
- Verwende Eloquent-Methoden, um häufige Datenbankoperationen auszuführen.
- Nutze Beziehungen für erweiterte Datenabfragen.

## 6. **Middleware**

Middleware wird verwendet, um HTTP-Anfragen zu filtern und zu ändern, wenn sie in die Anwendung gelangen. So funktioniert Middleware:

- Registriere Middleware in der Datei `app/Http/Kernel.php`.
- Wende die Middleware auf bestimmte Routen oder Routengruppen an.
- Verwende Middleware für Aufgaben wie Authentifizierung, Autorisierung und Protokollierung.

## 7. **Blade-Templates**

Blade ist Laravels Template-Engine. So funktionieren Blade-Templates:

- Verwende Blade-Syntax, um dynamische Inhalte in Ansichten einzufügen.
- Erstelle Layouts für konsistente Seitenstrukturen.
- Erweitere und integriere Vorlagen für die Code-Wiederverwendung.

## 8. **Authentifizierung und Autorisierung**

Laravel bietet integrierte Werkzeuge zur Benutzerauthentifizierung und Autorisierung. So funktionieren sie:

- Verwende `php artisan make:auth`, um die grundlegende Authentifizierung zu generieren.
- Definiere Autorisierungsrichtlinien und sog.Gates, um den Zugriff auf Ressourcen zu steuern.

## 9. **Artisan Console**

Artisan ist Laravels Befehlszeilentool. So funktioniert es:

- Führe Befehle mit `php artisan` aus, um verschiedene Aufgaben auszuführen.
- Erstelle benutzerdefinierte Artisan-Befehle für die spezifischen Anforderungen der Anwendung.

## 10. **Migrationen**

Migrationen ermöglichen, das Datenbankschema zu versionieren und zu ändern. So funktionieren Migrationen:

- Erstelle Migrationsdateien, um Änderungen an der Datenbank zu definieren.
- Führe Migrationen aus, um das Datenbankschema zu aktualisieren.
- Verwende Versionskontrolle, um Änderungen an der Datenbank zu verwalten.

## 11. **Factories**

Factories sind nützlich, um Testdaten dynamisch zu generieren. So funktionieren Factories:

- Erstelle Factories für Modelle, um realistische Testdaten zu erstellen.
- Verwende Factories in Verbindung mit Seedern, um große Datensätze zu generieren.
- Factories erleichtern das Testen der Anwendung.

## 12. **Seeder**

Seeder werden verwendet, um die Datenbank mit Testdaten zu füllen. So funktionieren Seeder:

- Erstelle Seeder mit dem Artisan-Befehl.
- Definiere Testdaten, die in die Datenbank eingespeist werden sollen.
- Verwende Seeder, um die Datenbank zu initialisieren.

## 13. **Provider**

Provider in Laravel sind dafür verantwortlich, verschiedene Dienste und Abhängigkeiten in der Anwendung zu registrieren. So funktionieren Provider:

- Erstelle benutzerdefinierte Provider, um zusätzliche Dienste hinzuzufügen.
- Registriere Provider in der Datei `config/app.php`.
- Provider spielen eine wichtige Rolle in der Service Container-Architektur von Laravel.