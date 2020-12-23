import React, { ReactNode, useReducer } from 'react';

interface IState {
  episodes: string[];
  favourites: string[];
}
export enum ActionTypes {
  'fetchData',
}

interface IAction {
  type: ActionTypes;
  payload: any;
}

interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IContext>({ state: initialState, dispatch: () => null });

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ActionTypes.fetchData:
      return { ...state, episodes: action.payload };

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
