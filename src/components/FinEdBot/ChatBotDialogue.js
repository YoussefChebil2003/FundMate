import React from 'react'
import "../../stylesheets/css/fined-bot.css"

function ChatbotDialogue({ title, content, onClose }) {
    return (
        <div className="chatbot-dialog">
            <div className="chatbot-dialog-header">
                <h2>{title}</h2>
                <button onClick={onClose}>X</button>
            </div>
            <div className="chatbot-dialog-content">
                <h3>{content.title}</h3>
                {content.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}

export default ChatbotDialogue


