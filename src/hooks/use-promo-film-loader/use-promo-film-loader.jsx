import {useEffect} from "react";

export const usePromoFilmLoader = (loadPromoFilm) => {
  useEffect(() => {
    loadPromoFilm();
  }, []);
};
