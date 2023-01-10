import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MovieCardItem, Container, MovieName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
    <Container>
        {movies?.map(({ id, poster_path, original_title }) => (
        <MovieCardItem key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
                />
                <MovieName>{original_title}</MovieName>
            </NavLink>
        </MovieCardItem>
        ))}
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </Container>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            poster_path: PropTypes.string,
            original_title: PropTypes.string,
        })
    ),
};