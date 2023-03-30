import React, { useState } from "react";
import "../../stylesheets/css/fined-bot.css"
import BPEdContent from "./BPEdContent";
import OtherEdContent from "./otherEdContent";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(null);
    const [content, setContent] = useState(null);

    const handleOptionClick = (selectedOption, selectedContent) => {
        setOption(selectedOption);
        setContent(selectedContent);
    };

    const handleResetClick = () => {
        setOption(null);
        setContent(null);
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-button" onClick={() => setIsOpen(true)}>
                    FinEdMate
                </button>
            )}

            {isOpen && !option && (
                <div className="chatbot-menu">
                    <button id="close-chatbot-btn" onClick={() => setIsOpen(false)}>X</button>
                    <h2 className="chatbot-header">How can we assist you?</h2>
                    <ul className="chatbot-options">
                        <li onClick={() => handleOptionClick("Choosing the right fundrasiing service", OtherEdContent)}>Step 1: Choosing the right fundrasiing service</li>
                        <li onClick={() => handleOptionClick("Portraying the business", OtherEdContent)}>Step 2: Portraying the business</li>
                        <li onClick={() => handleOptionClick("Portraying the team", OtherEdContent)}>Step 3: Portraying the team</li>
                        <li onClick={() => handleOptionClick("Choosing Investment options and perks", OtherEdContent)}>Step 4: Choosing Investment options and perks</li>
                        <li onClick={() => handleOptionClick("Choosing Donation options and perks", OtherEdContent)}>Step 4: Choosing Donation options and perks</li>
                        <li onClick={() => handleOptionClick("Submitting the business plan", BPEdContent)}>Step 5: Submitting the business plan</li>
                    </ul>
                </div>
            )}

            {isOpen && option && (
                
                <div className="chatbot-dialog">
                    <div className="chatbot-dialog-header">
                    <h2>{option}</h2>
                    <button onClick={handleResetClick}>Back</button>
                </div>
                <div className="chatbot-dialog-content">
                    <div>
                        {content}
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;