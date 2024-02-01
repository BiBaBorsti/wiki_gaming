import { useState, useEffect } from "react";

export default function Username() {
    const [username, setUsername] = useState("Horst");

    

    if (!username) {
        return <p>Loading...</p>;
    }

    return <p>Logged in as {username}</p>;
}