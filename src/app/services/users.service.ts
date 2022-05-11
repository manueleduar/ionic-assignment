import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Store } from '@ngrx/store';
import { Users } from 'src/app/models/Users.model';
import { UserProfile } from 'src/app/models/Profile.model';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    env = environment
    url = `${this.env.api}user`;
    users_url = `${this.env.api}users`;
    
        constructor(private http: HttpClient) { }
    
        getUser(username: string): Observable<UserProfile> {
            return this.http.get<UserProfile>(`${this.users_url}/${username}`);
        }
    
        getRepos(username: string): Observable<any> {
            return this.http.get(`${this.users_url}/${username}/repos`);
        }

        getUsers(): Observable<Users[]> {
            return this.http.get<Users[]>(`${this.users_url}`);
        }
}

