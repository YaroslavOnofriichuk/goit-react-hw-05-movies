import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { fetchFilmByName } from "../services/filmAPI";
import { FilmList } from "../components/FilmList/FilmList";
import { Section } from "../components/Section/Section.Styled";

export const MoviesPage = () => {
  const [films, setFilms] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
		async function fetchFilms () {
			try {
        setIsLoading(true);
				const films = await fetchFilmByName(query);
        films.length === 0 ? toast.error('No matched films!') : setFilms(films);
				setIsLoading(false);
			} catch (error) {
				toast.error(error);
			}
		}

    if (query) {
      fetchFilms();
    }
		
	}, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.elements.query.value.trim() === "") {
      toast.error('No matched films!');
    } else {
      setSearchParams({ query: e.currentTarget.elements.query.value });
    }
    e.currentTarget.reset();
  };

    return (
        <Section>  
            <form onSubmit={handleSubmit}>
              <input type="text" name="query" autoComplete="off"></input>
              <button type="submit">Search</button>
            </form>
            {isLoading && <ScaleLoader color={"#ffffff"} height={50} />}
            {films && <FilmList films={films} />}
        </Section>
    );
};