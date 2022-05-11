import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Users } from 'src/app/models/Users.model';
import { UserProfile } from 'src/app/models/Profile.model';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockUsersArray } from 'src/app/mocks/users_array.mock';
import { MockListProfileUsers } from 'src/app/mocks/list-of-profileUsers.mock';


describe('UsersService', () => {
    let service: UsersService;
    let httpClientSpy = { get: () => of(mockUsersArray) };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        })
        service = TestBed.inject(UsersService); // el inject antes se conocía como get
    });

    it('should be created Users Service', () => {
        expect(service).toBeTruthy();
    });

});