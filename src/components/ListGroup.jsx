import React from "react";
import { ListItem } from ".";

const ListGroup = ({ data }) => {
    return (
        <div className="list-group">
            {data.slice(0, 14).map((movie, idx) => (
                <ListItem movie={movie} key={idx} />
            ))}
        </div>
    );
};

export default ListGroup;
