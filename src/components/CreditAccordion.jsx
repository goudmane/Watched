import React from "react";
import { Accordion, ListGroup } from ".";
const CreditAccordion = ({ data }) => {
    console.log(data);
    return (
        <ul className="accordion-list">
            {Object.keys(data).map((title, idx) => (
                <li className="accordion-list-item" key={+idx}>
                    <Accordion
                        title={title}
                        length={data[title].length}
                        children={<ListGroup data={data[title]} />}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CreditAccordion;
