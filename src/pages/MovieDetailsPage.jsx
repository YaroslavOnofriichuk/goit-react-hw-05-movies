import { useEffect, useState } from 'react';
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { toast } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { FilmDetails } from "../components/FilmDetails/FilmDetails";
import { fetchFilmDetails } from "../services/filmAPI";
import { Section } from "../components/Section/AddInf.Styled";
import { Div } from "../components/Section/Sect.styled";

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
      async function fetchFilm () {
        try {
          const movie = await fetchFilmDetails(movieId);
          setMovie(movie);
          setIsLoading(false);
        } catch (error) {
          toast.error(error);
        }
      }
      fetchFilm();
    }, [movieId])

    return (
        <>
          <Div>
            <Link to={location?.state?.from ?? "/"}>Go Back</Link>
            {isLoading && <ScaleLoader color={"#ffffff"} height={100} />}
            {movie && <FilmDetails movie={movie}/>}
          </Div>
          <Section>
            <p>Additional information</p>
            <Link to="cast" state={{ from: location?.state?.from }}>Cast</Link>
            <Link to="reviews" state={{ from: location?.state?.from }}>Reviews</Link>
          </Section>
          <section>
            <Outlet />
          </section>
        </>
    );
};