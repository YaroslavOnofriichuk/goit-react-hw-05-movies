import { lazy, Suspense } from 'react'; 
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { AppBar } from "./AppBar/AppBar";
import { Cast } from "../components/Cast/Cast";
import { Reviews } from "../components/Reviews/Reviews";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";


const HomePage = lazy(()=> import("../pages").then(module => ({ default: module.HomePage})));
const MoviesPage = lazy(()=> import("../pages").then(module => ({ default: module.MoviesPage})));
const MovieDetailsPage = lazy(()=> import("../pages").then(module => ({ default: module.MovieDetailsPage})));




export const App = () => {

  return (
    <>
      <AppBar />
      <GlobalStyle />
      <Suspense fallback={<ScaleLoader color={"#FFFFFF"} height={50} />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
};
