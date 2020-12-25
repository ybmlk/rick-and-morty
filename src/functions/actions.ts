import { ActionTypes, IAction, ToggleFav } from '../functions/types';

export const fetchDataAction = async (dispatch: React.Dispatch<IAction>) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morthy&embed=episodes';
  const data = await fetch(URL);
  const dataJson = await data.json();
  dispatch({
    type: ActionTypes.fetchData,
    payload: dataJson._embedded.episodes,
  });
};

export const toggleFavAction: ToggleFav = async (episode, favourites, dispatch) => {
  const isFav = favourites.includes(episode);
  let favList = favourites;

  if (isFav) favList = favList.filter((x) => x.id !== episode.id);
  else favList.push(episode);

  dispatch({
    type: ActionTypes.updateFavourite,
    payload: favList,
  });
};
