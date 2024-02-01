---
title: React-Komponenten
description: description
---

React ist eine JavaScript-Bibliothek, die für den Aufbau von benutzerfreundlichen Benutzeroberflächen verwendet wird. Im Folgenden gibt es eine kleine Übersicht der wichtigsten Kernkomponenten, die später detaillierter erläutert werden.

## 1. **Komponenten**

React basiert auf der Idee von wiederverwendbaren Komponenten. So funktionieren Komponenten:

- Erstelle Komponenten, um die Benutzeroberfläche in unabhängige Teile aufzuteilen.
- Verwende JSX (JavaScript XML), um die Struktur und das Verhalten von Komponenten zu definieren.
- Kombiniere und verschachtle Komponenten, um komplexe UI-Elemente zu erstellen.

## 2. **Zustand (State)**

Der Zustand ermöglicht die Speicherung und Verwaltung von Daten in einer React-Anwendung. So funktioniert der Zustand:

- Definiere den Zustand innerhalb einer Komponente mithilfe des `useState`-Hooks oder der Zustandsklasse.
- Aktualisiere den Zustand, um Benutzerinteraktionen oder Datenänderungen widerzuspiegeln.
- Der Zustand ermöglicht die dynamische Aktualisierung der Benutzeroberfläche.

## 3. **Props (Eigenschaften)**

Props sind Eigenschaften, die von übergeordneten Komponenten an untergeordnete Komponenten übergeben werden. So funktionieren Props:

- Übergebe Daten und Konfigurationen an Komponenten, um sie flexibel und wiederverwendbar zu gestalten.
- Verwende Props, um Informationen zwischen Komponenten auszutauschen.
- Props sind in der Regel schreibgeschützt und können von übergeordneten Komponenten festgelegt werden.

## 4. **Ereignisse (Events)**

Ereignisse ermöglichen die Verarbeitung von Benutzerinteraktionen in React. So funktionieren Ereignisse:

- Füge Event-Handler zu JSX-Elementen hinzu, um auf Benutzeraktionen wie Klicks oder Eingaben zu reagieren.
- Verarbeite Ereignisse, indem du Funktionen aufrufst, die bestimmte Aktionen auslösen.
- Ereignisse sind ein wichtiger Teil der Interaktivität in React-Anwendungen.

## 5. **Lifecycle**

Obwohl die Verwendung des Lifecycle in modernen React-Anwendungen mit Funktionen und Hooks weniger relevant ist, war er in Klassenkomponenten wichtig. So funktionierte der Lifecycle:

- React-Komponenten durchlaufen verschiedene Lifecyclephasen, wie Mounting, Updating und Unmounting.
- In verschiedenen Lifecyclemethoden konnten Aktionen wie Datenabruf oder Aufräumarbeiten ausgeführt werden.
- In modernen React-Anwendungen werden anstelle des Lifecycle Hooks wie `useEffect` verwendet.

## 6. **Routen (Routing)**

Die Navigation zwischen verschiedenen Ansichten oder Seiten in einer React-Anwendung erfordert Routing. So funktioniert das Routing:

- Verwende Routing-Bibliotheken wie React Router, um URLs und Ansichten zu verwalten.
- Definiere Routen und komponiere Routenkomponenten, die bei Übereinstimmung mit der URL angezeigt werden.
- Das Routing ermöglicht die Strukturierung von Single-Page-Anwendungen (SPAs) und die Benutzerfreundlichkeit.

## 7. **Erweiterte Konzepte und Bibliotheken**

Zukünftig folgen fortgeschrittene Konzepte und Bibliotheken in React:

- 7.1 Kontext-API
- 7.2 Hooks
- 7.3 Formulare
- 7.4 Error-Handling
- 7.5 HTTP-Anfragen
- 7.6 Komponentenbibliotheken
- 7.7 Testen
- 7.8 State-Management-Bibliotheken
- 7.9 Erweiterte Routing-Features