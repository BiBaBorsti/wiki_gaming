---
title: React - Hooks - useState
description: description
sidebar:
  label: useState
  order: 1
tableOfContents: true
---
In React wird `useState`, wie auch jede andere Funktion, die mit `use` beginnt, als Hook bezeichnet.<br/>

Der `useState` Hook ist ein grundlegendes Konstrukt in React, das ermöglicht, den Zustand in funktionalen Komponenten zu verwalten. Es vereinfacht das Hinzufügen und Aktualisieren von Zuständen, was es zu einem essenziellen Werkzeug zur Erstellung dynamischer und interaktiver Benutzeroberflächen macht.


## Grundlegende Verwendung

Das `useState` Hook wird durch das Importieren aus der `react`-Bibliothek verwendet.

```jsx
import React, { useState } from 'react';

function Counter() {
  // Deklarieren der Zustandsvariable 'counter' mit dem Anfangswert 0
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Zähler: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Inkrementieren</button>
    </div>
  );
}
```
Der `useState`-Hook braucht einen initialen Wert für `counter`, hier die `0`.
Bei jedem Rendern der Component gibt `useState` zwei Werte zurück:
1. Die **state-Variable** `counter` mit dem zuletzt gespeicherten Wert
2. Die **state-Setter-Funktion** `setCounter`, welche den State updaten und somit React triggern kann, die Component neu zu rendern. 
Der gespeicherte Wert geht dabei nicht verloren.<br/>
Es ist allgemein üblich die Struktur `wert`, `setWert` einzuhalten, damit der Code leicht zu lesen ist.

Man kann mehrere `useState`-Variablen in einer Komponente verwenden. Anstatt mehrere Werte an gleicher Stelle über mehrere
Variablen zu aktualisieren, sollte man die Werte über eine einzelne Variable steuern, welche diese in ein Objekt speichert.

[Auswahl der State-Struktur](https://react.dev/learn/choosing-the-state-structure)

<br/>

Im Gegensatz zu `props` sind States innerhalb einer Component isoliert / private. Rendert man eine Component mehrfach hat jede ihren eigenen State.




## Verschiedene Verwendungsmöglichkeiten von `useState`

### 1. Einfache Zustandsverwaltung
Man kann `useState` verwenden, um grundlegende Zustände in einer Komponente zu verwalten. Für das initiale Rendering sollte ein Anfangswert angegeben werden.

```jsx
const [value, setValue] = useState(startValue);
```

### 2. Funktionale Aktualisierungen
Um den Zustand basierend auf dem vorherigen Zustand zu aktualisieren, verwendet man funktionale Aktualisierungen, um Genauigkeit sicherzustellen und eine sog. Race Condition zu vermeiden.

```jsx
setZähler(vorherigerZähler => vorherigerZähler + 1);
```
### 3. Texteingabe
```jsx
import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```

### 4. Objekt oder komplexe Zustände
`useState` kann auch komplexere Datenstrukturen wie Objekte oder Arrays verarbeiten.

```jsx
const [benutzer, setBenutzer] = useState({ name: 'Alice', alter: 30 });
```
### 5. Auswahlmöglichkeiten
```jsx
import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}
```

### 6. Verzögerte Initialisierung
Man kann eine Funktion als den anfänglichen Zustand an `useState` übergeben, um eine verzögerte Initialisierung zu ermöglichen, die nur beim ersten Rendern ausgeführt wird.

```jsx
const [daten, setDaten] = useState(() => datenVomServerAbrufen());
```

### 7. Toggle-Schalter
```jsx
import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Toggle is {isOn ? 'On' : 'Off'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}
```

## Arbeitsweise

- React optimiert das Rendern, indem es [Zustandsaktualisierungen zusammenfasst](https://react.dev/learn/queueing-a-series-of-state-updates).
- Zustandsaktualisierungen erfolgen asynchron, daher können sofortige Zustandsänderungen nicht garantiert werden.
- Vermeide tief verschachtelte Zustände, um Aktualisierungen übersichtlich zu halten.


## Zusammenfassung

- Nutze `useState` für eine Zustandsvariable, um einen Wert zu speichern, ohne ihn beim Rendern der Seite zu verlieren.
- Hooks sind spezielle Funktionen, die immer mit `use` beginnen.
- Hooks werden zu Beginn der Component aufgerufen. (Ausnahme: Innerhalb eigener Hooks)
- `useState` gibt den aktuellen Zustandswert sowie seine Updatefunktion zurück.
- Man kann mehrere State-Variablen haben. Intern arbeitet React sie ihrer Reihenfolge nach ab.
- State ist `private` in der Component. Somit hat jede Instanz beim Mehrfach-Rendern ihren eigenen Wert.
