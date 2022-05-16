import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/models/Users.model';
import { UserProfile } from 'src/app/models/Profile.model';
import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from 'src/app/store/actions/loader.actions';
import { LoadingState } from 'src/app/store/states/loader.state';
import { loaderReducer, getLoaderState, getIsLoading, getLoaded } from 'src/app/store/reducers/loader.reducer';
import { AppState } from 'src/app/store';
import { StoreModule } from '@ngrx/store';



@Injectable({
    providedIn: 'root'
})
export class UsersService {

    env = environment
    url = `${this.env.api}user`;
    users_url = `${this.env.api}users`;
    LoadedUsers$ : Observable<LoadingState>;
    
    constructor(private http: HttpClient) {
    }
    
        getUser(username: string): Observable<UserProfile> {
            return this.http.get<UserProfile>(`${this.users_url}/${username}`);
        }

        getUsers(): Observable<Users[]> {
            return this.http.get<Users[]>(this.users_url);
        }
}

