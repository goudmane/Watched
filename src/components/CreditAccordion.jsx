import React from "react";
import { Accordion } from ".";
const CreditAccordion = ({ data }) => {
    console.log(data);
    return (
        <ul className="accordion-list">
            {Object.keys(data).map((title, idx) => (
                <li className="accordion-list-item">
                    <Accordion
                        title={title}
                        length={data[title].length}
                        key={+idx}>
                        {data[title].map((item, key) => (
                            <div key={key}>{item.title}</div>
                        ))}
                    </Accordion>
                </li>
            ))}
        </ul>
    );
};

export default CreditAccordion;
