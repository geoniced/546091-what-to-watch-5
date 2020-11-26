import {useEffect} from "react";

export const useReviewsData = (filmId, loadReviews) => {
  useEffect(() => {
    loadReviews(filmId);
  }, [filmId]);
};
