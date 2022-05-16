import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoadingState } from './states/loader.state';
import * as fromLoader from './reducers/loader.reducer';


export interface AppState {
  loader: LoadingState;
}

export const reducers: ActionReducerMap<AppState> = {
  loader: fromLoader.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];


export const getLoaderState = createFeatureSelector<LoadingState>('loader');


export const getIsLoading = createSelector(
  getLoaderState,
  fromLoader.getIsLoading
);


export const getLoaded = createSelector(
  getLoaderState,
  fromLoader.getLoaded
);

