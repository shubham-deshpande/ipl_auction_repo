import React from 'react';
import './PowerPointDisplay.css';

const PowerPointDisplay = ({ slides }) => {
    return (
        <div className="powerpoint-container">
            {slides.map((slide, index) => (
                <div key={index} className="slide">
                    <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
                </div>
            ))}
        </div>
    );
};

export default PowerPointDisplay;
