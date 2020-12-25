import React, { Fragment, lazy, Suspense, useContext } from 'react';
import { Store } from '../Store';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function FavPage() {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <section className='episode-layout'>
          <EpisodesList display={state.favourites} />
        </section>
      </Suspense>
    </Fragment>
  );
}
