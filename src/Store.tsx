// ! This file handles global state via Context
import React, { useReducer } from 'react';
import { IState, IContext, IAction, ActionTypes } from './functions/types';

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IContext>({ state: initialState, dispatch: () => null });

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ActionTypes.fetchData:
      return { ...state, episodes: action.payload };
    case ActionTypes.updateFavourite:
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
