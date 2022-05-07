import { Action } from "@ngrx/store";
import { createAction, props } from "@ngrx/store";
import { UsersService } from "../../../../services/users.service";
import { environment } from "../../../environments/environment.prod";
import { Users } from "../../interfaces/users";
import  * as fromData from "../actions/loader.actions";


export const initialState = {
  users: [],
  user: {},
  repos: [],
  error: null,
  loading: false
};


export function reducer(state = initialState, action: fromData.Actions): any {
  switch (action.type) {
    case fromData.ActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true
      };
    case fromData.ActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case fromData.ActionTypes.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
  
}


export const getUsers = (state: any) => state.users;
export const getUser = (state: any) => state.user;
export const getRepos = (state: any) => state.repos;
export const getError = (state: any) => state.error;
export const getLoading = (state: any) => state.loading;