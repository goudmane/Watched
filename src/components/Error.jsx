import React from "react";

const Error = () => {
    return (
        <div className="error-card">
            <div className="error-status">
                <span className="error-code">500</span> Server Error
            </div>
            <div className="error-message">Oops, something went wrong</div>
            <div className="error-fix">
                Try to refresh this page or feel free to contact us if the
                problem persists
            </div>
        </div>
    );
};

export default Error;
