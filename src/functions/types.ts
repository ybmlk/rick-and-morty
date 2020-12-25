export interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  season: number;
  number: number;
}

export interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}

export enum ActionTypes {
  'fetchData',
  'updateFavourite',
}

export interface IAction {
  type: ActionTypes;
  payload: IEpisode[];
}

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export type ToggleFav = (
  episode: IEpisode,
  favourites: IEpisode[],
  dispatch: React.Dispatch<IAction>
) => void;
