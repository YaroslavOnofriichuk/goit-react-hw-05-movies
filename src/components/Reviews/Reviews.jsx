import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchFilmReviews } from "../../services/filmAPI";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { Div } from "./Reviews.Styled";

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews () {
      try {
        const movie = await fetchFilmReviews(movieId);
        setMovieReviews(movie);
        setIsLoading(false);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchReviews();
  }, [movieId])


  return (
    <Div>
      {isLoading && <ScaleLoader color={"#ffffff"} height={50} />}
      {movieReviews.length === 1 ? <ReviewsList movieReviews={movieReviews}/> :
      <span>We don't have any reviews for this film</span>}
    </Div>
  );
};