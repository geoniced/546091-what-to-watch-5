import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {ALL_GENRES_FILTER} from "./const";

dayjs.extend(duration);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilmGenres = (films) => {
  return [...new Set(films.map((film) => film.genre))];
};

export const getFilmsFilter = (films) => {
  const filmGenres = getFilmGenres(films);

  const filmFilter = {
    [ALL_GENRES_FILTER]: (filmCards) => filmCards,
  };

  filmGenres.forEach((filmGenre) => {
    filmFilter[filmGenre] = (filmCards) => {
      return filmCards.filter((film) => film.genre === filmGenre);
    };
  });

  return filmFilter;
};

export const getHoursAndMinutesDurationText = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);
  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();

  return `${hours > 0 ? `${hours}h ` : ``}${minutes}m`;
};

export const getDurationWithColons = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);

  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();
  const seconds = minutesDuration.seconds();

  const hoursText = hours < 10 ? `0${hours}` : hours;
  const minutesText = minutes < 10 ? `0${minutes}` : minutes;
  const secondsText = seconds < 10 ? `0${seconds}` : seconds;

  return `${hoursText}:${minutesText}:${secondsText}`;
};
