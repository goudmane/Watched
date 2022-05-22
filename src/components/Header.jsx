import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const peoplePathRegex = /\/people\/[0-9]+/;
    const noBannerPaths = ["/top-rated", "/trending", "/upcoming", "/people"];
    const className =
        noBannerPaths.includes(pathname) || pathname.match(peoplePathRegex)
            ? ""
            : "transparent";
    const activateClass = ({ isActive }) => (isActive ? "active" : "");
    return (
        <header className={className}>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Moviefy</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <NavLink className={activateClass} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={activateClass} to="/top-rated">
                                Top Rated
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={activateClass} to="/upcoming">
                                Upcoming
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={activateClass} to="/trending">
                                Trending
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
