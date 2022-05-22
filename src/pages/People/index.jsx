import React, { useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import DefaultImage from "../../assets/images/placeholder-image.png";
import { Error, Loader, MovieCard } from "../../components";
import { useFecthRequestPeople } from "../../hooks/peopleHook";

// eslint-disable-next-line no-sparse-arrays
const gender = [, "Female", "Male"];

const People = () => {
    const { personId } = useParams();
    const [isLess, setIsLess] = useState(true);
    const { person, loading, error } = useFecthRequestPeople(personId);
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;
    const handleText = () => {
        setIsLess((prev) => !prev);
    };
    const biography =
        isLess && person.biography.length >= 550
            ? person.biography.slice(0, 550) + "..."
            : person.biography;
    console.log(person);
    return (
        <>
            <Helmet>
                <title>{person.name} - Moviefy</title>
            </Helmet>
            <section>
                <div className="container">
                    <div className="people-page">
                        <div className="left">
                            <div className="profile-img">
                                <img
                                    src={person.profile_path || DefaultImage}
                                    alt={person.name}
                                    draggable="false"
                                />
                            </div>
                            <div className="person-details">
                                <div className="header">Personal Info:</div>
                                <div className="info-box">
                                    <div className="label">Known For:</div>
                                    <div className="value">
                                        {person.known_for_department}
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="label">Gender:</div>
                                    <div className="value">
                                        {gender[person.gender]}
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="label">Date of Birth:</div>
                                    <div className="value">
                                        {person.birthday}
                                    </div>
                                </div>
                                {person.deathday && (
                                    <div className="info-box">
                                        <div className="label">
                                            Place of Birth:
                                        </div>
                                        <div className="value">
                                            {person.place_of_birth}
                                        </div>
                                    </div>
                                )}
                                {person.place_of_birth && (
                                    <div className="info-box">
                                        <div className="label">
                                            Place of Birth:
                                        </div>
                                        <div className="value">
                                            {person.place_of_birth}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="right">
                            <h1>{person.name}</h1>
                            {biography.length > 0 && (
                                <div className="biography">
                                    <div className="label">Biography:</div>
                                    <p className="value">
                                        <span>{biography}</span>
                                        {person.biography.length >= 550 && (
                                            <button
                                                onClick={handleText}
                                                className="toggle-btn">
                                                {isLess ? "More" : "Less"}
                                            </button>
                                        )}
                                    </p>
                                </div>
                            )}
                            <div className="known-for">
                                <div className="label">Known For:</div>
                                <div className="person-movies">
                                    <div className="person-cast-grid">
                                        {person.cast
                                            .slice(0, 4)
                                            .map((movie) => (
                                                <MovieCard
                                                    key={movie.id}
                                                    movie={movie}
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default People;
