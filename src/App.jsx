// src/App.jsx or your main component file
import React, { useState } from "react";
import Events from "./Components/Events";
import Popup from "./Components/Popup";
import { EventProvider } from './Components/context/EventContext'; // Make sure to import your context provider

function App() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <EventProvider value={{ selectedEvent, setSelectedEvent }}> {/* Provide context */}
            <div>
                <Events />
                <Popup /> {/* Always render Popup, but it will show/hide based on context */}
            </div>
        </EventProvider>
    );
}

export default App;
