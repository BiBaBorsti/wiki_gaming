---
title: React Hooks
description: description
sidebar:
  label: React Hooks - Übersicht
  order: 0
---

React Hooks wurden 2019 eingeführt. Sie bieten eine moderne vereinfachte Möglichkeit zur Handhabung von Zustandsmanagement und Nebeneffekten in Funktionskomponenten.

Vorteile durch die Verwendung von React Hooks beim Entwickeln von Anwendungen:

- **Zustandsmanagement in Funktionskomponenten:** Mit `useState` können Funktionskomponenten nun ihren eigenen Zustand verwalten, ohne auf Klassenkomponenten angewiesen zu sein. Dies führt zu übersichtlicherem und kompakterem Code.

- **Wiederverwendbare Logik:** Hooks wie `useEffect` & `useContext` ermöglichen die Wiederverwendung von Logik über verschiedene Komponenten hinweg, was die Code-Wiederverwendung und -Wartbarkeit erhöht.

- **Bessere Lesbarkeit:** Funktionskomponenten mit Hooks sind oft leichter verständlich, da der Lebenszyklus und der Zustand in derselben Funktion definiert werden, was zu einer klaren und einheitlichen Struktur führt und den Code schlank hält.

- **Vereinfachte Entwicklung:** Hooks erlauben Entwicklern, sich auf die tatsächliche Funktionalität ihrer Anwendung zu konzentrieren, anstatt Zeit auf die Verwaltung von spezifischem React-Code zu verwenden.

<br/>

## Der useState-Hook

`useState` ist ein Hook in React, der in Funktionskomponenten verwendet wird, um Zustände zu verwalten. Der Aufbau besteht aus:

- einer Variable für den Zustand (zustand)
- einer Aktualisierungsfunktion (setZustand)
- einem Anfangswert für den Zustand

### Aufbau
```jsx
import React, { useState } from 'react';

const [zustand, setZustand] = useState(anfangsWert);
```
### Zustandsaktualisierung
```jsx
setZustand(neuerWert);
```

### Anwendungsbeispiele aus GSM

- Schalter (true/false)
  - Menüs Ein-/Ausblenden
  - Drag'n'Drop freigeben
- Werterfassung
  - Votings erfassen
  - Einträge anlegen/bearbeiten
  - Drag'n'Drop Objekterfassung

<br/>

## Der useEffect-Hook
`useEffect` ist ein Hook in React, der in Funktionskomponenten verwendet wird, um Nebeneffekte zu verwalten. Der Aufbau besteht aus:

- einer Funktion, die den Nebeneffekt ausführt
- einem optionalen Abhängigkeitsarray

### Aufbau
```jsx
import React, { useEffect } from 'react';

useEffect(() => {
  // Code für den Nebeneffekt
}, [Abhängigkeitsarray]);
```

### Zustandsaktualisierung
Die Funktion im `useEffect` wird immer dann ausgeführt, wenn die Komponente gerendert wird.

Es gibt drei Möglichkeiten, wie das Abhängigkeitsarray definiert werden kann:

- **Kein Array:** Wenn kein Abhängigkeitsarray angegeben wird, wird der Nebeneffekt nach jedem Rendern ausgeführt. Dies ist nützlich, wenn der Nebeneffekt unabhängig von Zustandsänderungen ausgeführt werden soll. <br/> _Sinnvoll z.B. bei Timern, DOM-Manipulation_

- **Leeres Array:** Wenn ein leeres Abhängigkeitsarray verwendet wird, wird der Nebeneffekt nur einmal nach dem initialen Rendern ausgeführt. <br/> _Sinnvoll z.B. für einmalige Datenabrufe_

- **Array mit Wert:** Wenn das Abhängigkeitsarray Werte enthält, wird der Nebeneffekt nur dann ausgeführt, wenn sich diese Werte ändern. Dies ist hilfreich, um den Nebeneffekt auf Änderungen bestimmter Zustände oder Prop-Änderungen zu beschränken, um unnötige Ausführungen zu vermeiden.

### Anwendungsbeispiele aus GSM

- Fokussieren von Textfeldern / Buttons erfassen
- Beim Login auf Fehler prüfen -> einblenden
- Render-Endlosschleife verhindern

<br/>

## Code-Beispiele / Vergleich

### React mit Hooks

```jsx
import React, { useState, useEffect } from "react";

export default function GetHungry() {
  const [number, setNumber] = useState(1);
  const [effectLogs, setEffectLogs] = useState([]);
  const [showPicture, setShowPicture] = useState(false);
  const handleClick = () => setNumber(number + 1);
  const clear = () => {
    setEffectLogs([])
    setNumber(0);
  };

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [...prevEffectLogs, "🍔"]);
  }, [number]);

  const togglePicture = () => {
    setShowPicture(!showPicture);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Mehr Burger</button>
      <button onClick={clear}>Keine Burger</button>
      <button onClick={togglePicture}>
        {showPicture ? "Aufessen" : "Hunger"}
      </button>
      <div>{effectLogs.slice(0, effectLogs.length - 1)}</div>

      {showPicture && (
        <img
          src="https://84er.net/burger.jpg" alt="Burger"
          style={{ width: "200px", height: "200px" }}
        />
      )}
    </div>
  );
}
```

### React vor der Einführung von Hooks (Klassenkomponenten)

```jsx
import React, { Component } from 'react';

class GetHungry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      effectLogs: [],
      showPicture: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
      effectLogs: [...prevState.effectLogs, '🍔'],
    }));
  };

  togglePicture = () => {
    this.setState((prevState) => ({
      showPicture: !prevState.showPicture,
    }));
  };

  clear = () => {
    this.setState({
      number: 0,
      effectLogs: [],
    });
  }

  componentDidMount() {
    this.setState((prevState) => ({
      effectLogs: [...prevState.effectLogs, '🍔'],
    }));
  }

  render() {
    const { number, effectLogs, showPicture } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.handleClick}>Mehr Burger</button>
        <button onClick={this.clear}>Keine Burger</button>
        <button onClick={this.togglePicture}>
          {showPicture ? "Aufessen" : "Hunger"}
        </button>
        <div>{effectLogs.slice(0, effectLogs.length - 1)}</div>

        {showPicture && (
          <img
            src="https://84er.net/burger.jpg"
            alt="Burger"
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
    );
  }
}
export default GetHungry;
```