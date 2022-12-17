import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import Pricing from "./pages/Pricing";
import TVShow from "./pages/TVShow";
import Layout from "./components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tvshows" element={<TVShow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
