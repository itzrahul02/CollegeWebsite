// src/components/Popup.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEvent } from './context/EventContext'; // Update the import path

function Popup() {
    const { selectedEvent, setSelectedEvent } = useEvent();

    if (!selectedEvent) return null; // Don't render if no event is selected

    return (
        <div 
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-[50]" 
            onClick={() => setSelectedEvent(null)} // Close popup on overlay click
        >
            <div 
                className="shadow-lg shadow-black/50 w-[90%] max-w-[800px] mx-auto mt-[8rem] bg-white relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
            >
                <div className="p-[1rem]">
                    <div>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            onClick={() => setSelectedEvent(null)} 
                            className="text-black relative left-[2rem] mb-[1rem] cursor-pointer" 
                            size="2x"
                        />
                    </div>
                    <div className="bg-black/80 w-[90%] h-[1px] mx-auto"></div>
                    <div className="title text-center text-4xl font-bold mt-[2rem]">{selectedEvent.title}</div>
                    <div className="flex items-start justify-between">
                        <div className="img-date mt-[2rem] ml-[2.5rem]">
                            <img src={selectedEvent.imageurl} alt="Event" className="w-[25rem] h-[24rem]" />
                            <div className="text-xl mt-[2rem] font-semibold mb-[2rem] text-center">Date: {selectedEvent.date}</div>
                        </div>
                        <div className="w-[3px] h-[24rem] mt-[2rem] mx-[2rem] bg-black/50"></div>
                        <div className="description mt-[2rem] w-[55%] overflow-y-auto max-h-[400px]"> {/* Enable scrolling */}
                            {selectedEvent.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
