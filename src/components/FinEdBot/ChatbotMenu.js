import React from 'react'
import "../../stylesheets/css/fined-bot.css"


function ChatbotMenu({ onOptionClick }) {
    const options = [{
        label: "Option 1", content: {
            title: "Option 1", paragraphs: ["Option 1 content..."]
        }
    },
    {
        label: "Option 2",
        content: {
            title: "Option 2",
            paragraphs: ["Option 2 content..."]
        }
    },
    {
        label: "Option 3",
        content: {
            title: "Option 3",
            paragraphs: ["Option 3 content..."]
        }
    }
    ];

    return (
        <div className="chatbot-menu">
            {options.map((option, index) => (
                <button
                    key={index}
                    className="chatbot-menu-option"
                    onClick={() => onOptionClick(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default ChatbotMenu