import React, { useEffect, useContext, Suspense, Fragment, lazy } from 'react';
import {fetchDataAction} from '../functions/actions';
import { Store } from '../Store';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    !state.episodes.length && fetchDataAction(dispatch);
  });

  
  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <section className='episode-layout'>
          <EpisodesList display={state.episodes} />
        </section>
      </Suspense>
    </Fragment>
  );
}
