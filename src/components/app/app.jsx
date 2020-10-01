import React from "react";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {movieCard} = props;
  return (
    <MainPage movieCard={movieCard}/>
  );
};

export default App;
