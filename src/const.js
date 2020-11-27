export const ALL_GENRES_FILTER = `All genres`;
export const FILM_CARDS_PER_STEP = 8;

export const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  MY_LIST: `/mylist`,
  LOGIN: `/login`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

export const EMPTY_FILM = {
  backgroundColor: ``,
  backgroundImage: ``,
  description: ``,
  director: ``,
  genre: ``,
  id: 0,
  isFavorite: false,
  posterImage: ``,
  previewImage: ``,
  rating: 0,
  ratingsCount: 0,
  releaseYear: 1970,
  runtime: 1,
  starring: [],
  title: ``,
  video: ``,
  videoPreview: ``,
};

export const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const MIN_REVIEW_TEXT_LENGTH = 50;
export const MAX_REVIEW_TEXT_LENGTH = 400;

export const VALIDATION_MESSAGES = {
  RATING_STARS: `Fill the rating`,
  REVIEW_TEXT: `Review text should contain more than 50 and less than 400 symbols`,
  EMAIL: `Enter a valid email`,
  PASSWORD: `Enter the password field`,
};

export const ERROR_MESSAGES = {
  EMAIL_ERROR_PATTERN: `Error: Email address should follow this pattern: "example@domain.com"`,
};

