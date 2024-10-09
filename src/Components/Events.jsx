// src/components/Events.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import './Events.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEvent } from './context/EventContext';

function Events() {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const { setSelectedEvent } = useEvent(); // Use context

    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://webteam-assignments.onrender.com/events")
            .then(response => {
                console.log(response.data.data);
                setValue(response.data.data); 
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">Error loading events. Please try again later.</div>;
    }

    return (
        <>
            <div className="container1 flex items-center justify-center gap-4 font-bold mx-auto font-sans">
                <div className="h-[2px] w-[35%] bg-blue-950 mt-[8px]"></div>
                <div className="text-blue-950">Events</div>
                <div className="h-[2px] w-[35%] bg-blue-950 mt-[8px]"></div>
            </div>
            <div className="Events m-[1rem]">
                <div className="Container">
                    <div className="slider-container w-[70%] mx-auto">
                        <Slider ref={sliderRef} {...settings}>
                            {value.map((each, index) => (
                                <div key={index} className="card bg-black/5 h-[28rem] rounded-2xl overflow-hidden">
                                    <div>
                                        <img src={each.imageurl} alt="Event Image" className="image w-full" />
                                    </div>
                                    <div className="p-[1rem]">
                                        <p className="text-xl" style={{ color: "#818181" }}>{each.date || "Date Unavailable"}</p>
                                        <p className="font-semibold text-[1.2rem]" style={{ color: "#464646" }}>
                                            {each.title || "Event Title Unavailable"}
                                        </p>
                                    </div>
                                    <div 
                                        className="pl-[1rem] pb-[0.5rem] text-[20px] text-blue-600 hover:text-blue-500 cursor-pointer"
                                        onClick={() => setSelectedEvent(each)} // Handle click without Link
                                    >
                                        Read More <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
