
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchMovie } from 'services/TheMovieAPI';
import { MoviesList } from 'components/MoviesList';
import { SearchMovie } from 'components/SearchMovie';

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const movieName = searchParams.get('query') ?? '';

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                if (!movieName) {
                    return;
                }

        const { results } = await fetchSearchMovie(movieName);

        if (results.length === 0) {
            toast.error('Unfortunately, your search returned no results.');
        }
        setMovies(results);
            } catch (error) {
                console.log(error);
        }
    };

    fetchSearch();
    }, [movieName]);

    const onSearchMovie = value => {
        if (value === '') {
        toast.error('You have not entered anything!');
        return;
    }
    setSearchParams(value !== '' ? { query: value.trim() } : {});
    };

    return (
    <main>
        <SearchMovie onSubmit={onSearchMovie} />
        {movies.length > 0 && <MoviesList movies={movies} />}
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </main>
    );
};