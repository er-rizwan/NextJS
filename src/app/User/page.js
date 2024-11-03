'use client';
import { useState } from "react";

export default function Page() {
    const [H3Style, setH3Style] = useState({ backgroundColor: 'green' });

    return (
        <>
            <h1>Global CSS configuration.</h1>
            <h2>Local CSS configuration.</h2>
            <h3 style={H3Style}>On click change color</h3>

            <button onClick={() => setH3Style({ backgroundColor: 'yellow' })}>
                Update style
            </button>
        </>
    );
}
