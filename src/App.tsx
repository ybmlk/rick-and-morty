import React, { Fragment, lazy, Suspense, useContext, useEffect } from 'react';
import { Store } from './Store';
import { ActionTypes, IEpisode } from './types';
import './App.css';

const EpisodesList = lazy(() => import('./components/EpisodesList'));

function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    !state.episodes.length && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morthy&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    dispatch({
      type: ActionTypes.fetchData,
      payload: dataJson._embedded.episodes,
    });
  };

  const toggleFavAction = async (episode: IEpisode) => {
    const isFav = state.favourites.includes(episode);
    let favList = state.favourites;

    if (isFav) favList = favList.filter((x) => x.id !== episode.id);
    else favList.push(episode);

    dispatch({
      type: ActionTypes.updateFavourite,
      payload: favList,
    });
  };

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Rick and Morthy</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>Favourite: {state.favourites.length}</div>
      </header>
      <Suspense fallback={<div>Loading</div>}>
        <section className='episode-layout'>
          <EpisodesList toggleFavAction={toggleFavAction} />
        </section>
      </Suspense>
    </Fragment>
  );
}

export default App;
