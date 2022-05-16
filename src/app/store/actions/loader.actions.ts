import { createAction, props, Action} from "@ngrx/store";
import { UsersService } from 'src/app/services/users.service';
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingState } from '../states/loader.state';
import { Users } from "../../models/Users.model";


export const LOAD_USERS = createAction('[Users] Load Users');
export const LOAD_USERS_SUCCESS = createAction('[Users] Load Users Success', props<{ users: Users[]}>());
export const LOAD_USERS_FAIL = createAction('[Users] Load Users Fail', props<{ error: any }>());


export enum ActionTypes {
  LOAD_USERS = '[Users] Load Users',
  LOAD_USERS_SUCCESS = '[Users] Load Users Success',
  LOAD_USERS_FAIL = '[Users] Load Users Fail'
}


export class LoadUsers implements Action {
  readonly type = ActionTypes.LOAD_USERS;
}


export class LoadUsersSuccess implements Action {
  readonly type = ActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: LoadingState) {}
}


export class LoadUsersFail implements Action {
  readonly type = ActionTypes.LOAD_USERS_FAIL;
  constructor(public payload: LoadingState) {}
}


export type Actions = LoadUsers | LoadUsersSuccess | LoadUsersFail;
