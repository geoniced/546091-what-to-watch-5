import {useEffect} from "react";

export const useFilmListLoader = (loadFilmList) => {
  useEffect(() => {
    loadFilmList();
  }, []);
};
