import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ScaleLoader from "react-spinners/ScaleLoader";
import { FilmList } from "../components/FilmList/FilmList";
import { fetchPopularFilms } from "../services/filmAPI";
import { Section } from "../components/Section/Section.Styled";

export const HomePage = () => {
	const [films, setFilms] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchFilms () {
			try {
				const films = await fetchPopularFilms();
				setFilms(films);
				setIsLoading(false);
			} catch (error) {
				toast.error(error);
			}
		}
		fetchFilms();
	}, []);

    return (
				<Section>
					<p>Trending today</p>
					{isLoading && <ScaleLoader color={"#FFFFFF"} height={50} />}
					{films && <FilmList films={films} />}
				</Section>
    );
};