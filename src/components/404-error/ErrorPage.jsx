import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <>
            <div className="notfound-container">
                <div className="notfound">
                    <h1>oops!</h1>
                    <h2>Error 404 : Page Not Found</h2>
                    <Link to="/" className="error-button">go back</Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
