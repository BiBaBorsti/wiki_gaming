import React, { useState, useEffect } from "react";

export default function GetHungry() {
    const [number, setNumber] = useState(0);
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