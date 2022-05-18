import React from "react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
    const errorMsg =
        error.status === 404 ? "Page not Found" : "Oops, something went wrong";
    const errorFix = error.status === 404;
    return (
        <div className="error-container">
            <div className="error-card">
                <div className="error-status">{error.status}</div>
                <div className="error-message">{errorMsg}</div>
                <div className="error-fix">
                    {errorFix ? (
                        <Link to="/"> Go Back </Link>
                    ) : (
                        " Try to refresh this page or feel free to contact us if the problem persists"
                    )}
                </div>
            </div>
        </div>
    );
};

export default Error;
