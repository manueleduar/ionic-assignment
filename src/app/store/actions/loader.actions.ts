import { createAction, props, Action} from "@ngrx/store";
import { UsersService } from "../../../../services/users.service";
import { environment } from "../../../environments/environment.prod";


export enum ActionTypes {
  LOAD_USERS = "[LOAD_USERS] Load Users",
  LOAD_USERS_SUCCESS = "[LOAD_USERS_SUCCESS] Load Users Success",
  LOAD_USERS_FAIL = "[LOAD_USERS_FAIL] Load Users Fail",
}


export class LoadUsers implements Action {
  readonly type = ActionTypes.LOAD_USERS;
}


export class LoadUsersSuccess implements Action {
  readonly type = ActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: any) {}
}


export class LoadUsersFail implements Action {
  readonly type = ActionTypes.LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}


export type Actions = LoadUsers | LoadUsersSuccess | LoadUsersFail;