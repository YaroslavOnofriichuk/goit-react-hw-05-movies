import { IconContext } from "react-icons";  
import PropTypes from 'prop-types';
import { BsPersonSquare } from "react-icons/bs";

export const CastList = ({movieCast}) => {
  return (
    <ul>
      {movieCast.map(actor => {
        return (
          <li key={actor.cast_id}>
            {actor.profile_path ? 
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.original_name} width="100px"></img> :
              <IconContext.Provider value={{ color: "#ffffff", size: "5em"}}>
                <div>
                  <BsPersonSquare/>
                </div>
              </IconContext.Provider>} 
            <p>{actor.original_name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

CastList.propTypes = {
  movieCast: PropTypes.array
};