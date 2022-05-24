import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const Accordion = ({ title, length, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`accordion-item ${isOpen ? "opened" : ""}`}>
            <div
                className="accordion-line"
                onClick={() => setIsOpen((prev) => !prev)}>
                <h3 className="title">
                    {title} ({length} credits)
                </h3>
                <span className="icon">
                    <BiUpArrow />
                </span>
            </div>
            <div className="accordion-inner">
                <div className="accordion-content">
                    <div className="paragraph">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
