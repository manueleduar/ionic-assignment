import { Action } from "@ngrx/store";
import { createAction, props } from "@ngrx/store";
import { UsersService } from 'src/app/services/users.service';
import { environment } from "../../../environments/environment.prod";
import { Users } from "../../models/Users.model";
import { UserProfile } from "../../models/Profile.model";
import  * as fromData from "../actions/loader.actions";


