import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MoviesList } from ".";

const Category = ({ movies, label, to }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(to);
    };
    return (
        <div className="category-home">
            <div className="label">
                <h2>{label}</h2>
                <span onClick={handleNavigate} className="see-more">
                    <IoIosArrowDropright />
                </span>
            </div>
            <MoviesList movies={movies} />
        </div>
    );
};

export default Category;
