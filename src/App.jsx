import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TopRated from "./pages/TopRated";
import TrendingMovies from "./pages/Trending";
import UpcomingMovies from "./pages/Upcoming";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/top-rated" element={<TopRated />} />
                    <Route path="/trending" element={<TrendingMovies />} />
                    <Route path="/upcoming" element={<UpcomingMovies />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
