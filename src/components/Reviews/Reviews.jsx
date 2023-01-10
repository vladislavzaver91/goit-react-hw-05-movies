import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsMovie } from 'services/TheMovieAPI';
import { CardList, CardItem, ReviewsInfo } from './Reviews.styled';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();
    useEffect(() => {

    const fatchCast = async () => {
        try {
            const { results } = await fetchReviewsMovie(movieId);
            setReviews(results);
        } catch (error) {
            console.log(error);
        }
    };

    fatchCast();
    }, [movieId]);

    if (reviews.length === 0) {
        return (
        <ReviewsInfo>
        We don't have any rewievs for this movie
        </ReviewsInfo>
        );
    }

    return (
    <CardList>
        {reviews.map(({ id, author, content }) => {
            return (
            <CardItem key={id}>
                <p>
                    <b>Author: {author}</b>
                </p>
                <p>{content}</p>
            </CardItem>
        );
        })}
    </CardList>
    );
};