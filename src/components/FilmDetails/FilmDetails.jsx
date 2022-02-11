import { IconContext } from "react-icons";  
import { GiFilmStrip } from "react-icons/gi";
import { replaceGenres, replaceVote, replaceDate} from "../../services";
import { Div } from "./FilmDetails.Styled";
import PropTypes from 'prop-types';

export const FilmDetails = ({movie}) => {
  return (
    <Div>
      {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title || movie.original_title}></img> :
      <IconContext.Provider value={{ color: "#FFFFFF", size: "10em"}}>
        <div>
          <GiFilmStrip/>
        </div>
      </IconContext.Provider>}
      <div>{movie.title || movie.original_title} (<span className="year">{replaceDate(movie.release_date)}</span>)</div>
      <span>User Score: {replaceVote(movie.vote_average)}%</span>
      <p>Overview:</p>
      <span>{movie.overview}</span>
      <p>Genres:</p>
      <span>{replaceGenres(movie.genres)}</span>
    </Div>
  );
};

FilmDetails.propTypes = {
  movie: PropTypes.object
};