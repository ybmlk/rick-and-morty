import React, { useContext, Fragment } from 'react';
import { Store } from '../Store';
import { toggleFavAction } from '../functions/actions';
import { IEpisode } from '../functions/types';

type IProps = { display: IEpisode[] };

export default function EpisodesList({ display }: IProps) {
  const {
    state: { favourites },
    dispatch,
  } = useContext(Store);

  return (
    <Fragment>
      {display.map((episode) => {
        return (
          <div key={episode.id} className='episode-box'>
            <img src={episode.image.medium} alt={episode.name} />
            <div>{episode.name}</div>
            <div>
              <div>
                Season: {episode.season} Number: {episode.number}{' '}
              </div>
              <button
                type='button'
                onClick={() => toggleFavAction(episode, favourites, dispatch)}
                className={favourites.includes(episode) ? 'fav' : ''}
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
