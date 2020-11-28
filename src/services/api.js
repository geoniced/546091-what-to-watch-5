import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response, message} = err;

    if (response && response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    } else {
      onError({text: message});
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
