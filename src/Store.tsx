import React, { ReactNode, useReducer } from 'react';
import { IState, IContext, IAction, ActionTypes } from './types';

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

interface Props {
  children: ReactNode;
}

export function StoreProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}
