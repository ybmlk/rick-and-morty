import React, { Fragment, useContext } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';
import './App.css';

function App(props: any) {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <div className='menuBar'>
        <Link to='/'>Home</Link>
        <Link to='/fav'>Favourite: {state.favourites.length}</Link>
      </div>
      <header className='header'>
        <div>
          <h1>Rick and Morthy</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
      </header>
      
      {props.children}
    </Fragment>
  );
}

export default App;
