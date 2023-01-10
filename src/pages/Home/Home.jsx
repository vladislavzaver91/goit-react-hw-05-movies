import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList';
import { fetchTrendingMovies } from 'services/TheMovieAPI';
import { Title } from './Home.styled';

export const Home = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fatchMovies = async () => {
            try {
                const { results } = await fetchTrendingMovies();
                setMovies(results);
            } catch (error) {
                console.log(error);
            } finally {
        }
    };

    fatchMovies();
    }, []);

    if (!movies) {
        return <Title>Something went wrong, please try again!</Title>;
    }

    return (
    <main>
        <Title>Popular movies today</Title>
        <MoviesList movies={movies} />
    </main>
    );
};