import React, { useContext, Fragment } from 'react';
import { IEpisode } from '../types';
import { Store } from '../Store';

interface IProps {
  toggleFavAction: (episode: IEpisode) => void;
}

export default function EpisodesList({ toggleFavAction }: IProps) {
  const {
    state: { episodes, favourites },
  } = useContext(Store);

  return (
    <Fragment>
      {episodes.map((episode) => {
        return (
          <div key={episode.id} className='episode-box'>
            <img src={episode.image.medium} alt={episode.name} />
            <div>{episode.name}</div>
            <div>
              <div>
                Season: {episode.id} Number: {episode.number}{' '}
              </div>
              <button
                type='button'
                onClick={() => toggleFavAction(episode)}
                className={favourites.includes(episode) ? 'red' : ''}
              >
                {favourites.includes(episode) ? 'UnFav' : 'Fav'}
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
