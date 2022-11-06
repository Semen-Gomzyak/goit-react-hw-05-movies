import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReviewInformationById } from 'ServiceAPI';
import {
  ReviewsSection,
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      FetchReviewInformationById(id).then(res => setReviews(res));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <ReviewsSection>
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewsItem key={review.id}>
              <ReviewsTitle>Author: {review.author}</ReviewsTitle>
              <ReviewsText>{review.content}</ReviewsText>
            </ReviewsItem>
          ))
        ) : (
          <ReviewsText>We don't have any reviews for this movie</ReviewsText>
        )}
      </ReviewsList>
    </ReviewsSection>
  );
};

export default Reviews;
