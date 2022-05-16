import { Action, createReducer, DefaultProjectorFn, MemoizedSelector, on } from "@ngrx/store";
import { createAction, props } from "@ngrx/store";
import { UsersService } from 'src/app/services/users.service';
import { environment } from "../../../environments/environment.prod";
import { Users } from "../../models/Users.model";
import { UserProfile } from "../../models/Profile.model";
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from "../actions/loader.actions";
import { LoadingState } from "../states/loader.state";


const initialState: LoadingState = {
  isLoading: false,
  Loaded: false
};

export const loaderReducer = createReducer(
  initialState,
  on(LOAD_USERS, state => ({
    ...state,
    isLoading: true,
    Loaded: false
  })),
  on(LOAD_USERS_SUCCESS, (state, { users }) => ({
    ...state,
    isLoading: false,
    Loaded: true,
    users: users
  })),
  on(LOAD_USERS_FAIL, (state, { error }) => ({
    ...state,
    isLoading: false,
    Loaded: false,
    error: error
  }))
);


export function reducer(state: LoadingState | undefined, action: Action): LoadingState {
  return loaderReducer(state, action);
}


export const getLoaderState = (state: LoadingState) => state;


export const getIsLoading = (state: LoadingState) => state.isLoading;


export const getLoaded = (state: LoadingState) => state.Loaded;


export function getError(getLoaderState: MemoizedSelector<object, LoadingState, DefaultProjectorFn<LoadingState>>, getError: any) {
  throw new Error('Function not implemented.');
}

