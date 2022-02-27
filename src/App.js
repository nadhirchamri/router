import "./App.css";
import AddMovie from "./Components/AddMovie/AddMovie";
import Footer from "./Components/Footer/Footer";
import MovieList from "./Components/MovieList/MovieList";
import Navbar from "./Components/Navbar/Navbar";
import { moviesData } from "../src/Constants/Data";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";




function App() {
  const [rate, setRate] = useState(0);
  const [text, setText] = useState("");

  const [movies, setMovies] = useState(moviesData);
  const handleZid = (movie) => {
    setMovies([...movies, movie]);
  };
  const fasakhMovie = (id) => {
    setMovies(movies.filter((el) => el.id != id));
  };
  return (
    <div>
      <Navbar setText={setText} setRate={setRate} />
      
      <AddMovie handleZid={handleZid} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              text={text}
              rate={rate}
              fasakhMovie={fasakhMovie}
            />
          }
        />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>

      
      <Footer />
    </div>
  );
}



export default App;
