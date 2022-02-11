import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchFilmCast } from "../../services/filmAPI";
import { CastList } from "../CastList/CastList";
import { Div } from "./Cast.Styled";

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast () {
      try {
        const movie = await fetchFilmCast(movieId);
        setMovieCast(movie);
        setIsLoading(false);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchCast();
  }, [movieId])


  return (
    <Div>
      {isLoading && <ScaleLoader color={"#ffffff"} height={50} />}
      {movieCast && <CastList movieCast={movieCast}/>}
    </Div>
  );
};