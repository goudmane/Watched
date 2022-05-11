import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const noBannerPaths = ["/top-rated", "/trending", "/upcoming"];
    const className = noBannerPaths.includes(pathname) ? "" : "transparent";
    return (
        <header className={className}>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Moviefy</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/top-rated">Top Rated</Link>
                        </li>
                        <li>
                            <Link to="/upcoming">Upcoming</Link>
                        </li>
                        <li>
                            <Link to="/trending">Trending</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
