import React, { Fragment, useContext, useEffect } from 'react';
import { Store, ActionTypes } from './Store';
import './App.css';

function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    !state.episodes.length && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morthy&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: ActionTypes.fetchData,
      payload: dataJson._embedded.episodes,
    });
  };

  console.log(state);

  return (
    <Fragment>
      <h1>Rick and Morthy</h1>
      <p>Pick your favourite episode!!!</p>
    </Fragment>
  );
}

export default App;
