import React from 'react';
import './Newsletter.css';

function Newsletter() {
    return (
        <div className="newsletter-container">
            <h2 className="newsletter-title">SIGN UP FOR NEWSLETTER</h2>
            <input className="newsletter-input" placeholder="Ej: lucas.s@gmail.com" type="text"/>
            <button className="newsletter-button">Subscribe</button>
        </div>
    )
}

export default Newsletter