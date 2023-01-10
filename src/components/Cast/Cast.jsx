import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastMovie } from 'services/TheMovieAPI';
import { CardItem, CastList, CastName, CastInfo } from './Cast.styled';

export const Cast = () => {
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const fatchCast = async () => {
            try {
                const { cast } = await fetchCastMovie(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            }
        };

        fatchCast();
    }, [movieId]);

    if (cast.length === 0) {
        return (
        <CastInfo>We don't have any cast for this movie</CastInfo>
    );
};

    return (
    <CastList>
        {cast.map(({ id, profile_path, name, character }) => {
            return (
            <CardItem key={id}>
                <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                />
                <CastName>
                    <b> Name: </b>
                    {name}
                </CastName>
                <CastName>
                    <b>Character: </b>
                    {character}
                </CastName>
            </CardItem>
        );
        })}
    </CastList>
    );
};