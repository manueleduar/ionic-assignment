import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Users } from 'src/app/models/Users.model';
import { UserProfile } from 'src/app/models/Profile.model';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockUsersArray } from 'src/app/mocks/users_array.mock';
import { MockListProfileUsers } from 'src/app/mocks/list-of-profileUsers.mock';


describe('UsersService', () => {
    let service: UsersService;
    let httpTestingController: HttpTestingController;
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new UsersService(httpClientSpy as any);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        })
        // service = TestBed.inject(UsersService); // el inject antes se conocía como get
    });

    it('should be created Users Service', () => {
        expect(service).toBeTruthy();
    });

    // Test GetUser function
    it('should return array of users using GetUsers() function of service', (done: DoneFn) => {
        const users = mockUsersArray;
        httpClientSpy.get.and.returnValue(of(users));

        service.getUsers().subscribe(
            (data: Users[]) => {
                expect(data).toEqual(users);
                done();
            }
        );
    });

    // Test getUser function
    it('should return user profile using GetUser() function of service', (done: DoneFn) => {
        const user = MockListProfileUsers[0];
        httpClientSpy.get.and.returnValue(of(user));

        service.getUser(user.login).subscribe(
            (data: UserProfile) => {
                expect(data).toEqual(user);
                done();
            }
        );
    });

    // Test getUser function when user is incorrect
    it('should return error using GetUser() function of service', (done: DoneFn) => {
        const user = 'kfhgkjfhgkjfhgkjfg';

        const error404 = new HttpErrorResponse({
            error: {
                message: 'Not Found',
                documentation_url: 'https://docs.github.com/rest/reference/users#get-a-user'
            },
            status: 404,
            statusText: 'Not Found',
        });

        httpClientSpy.get.and.returnValue(throwError(error404));

        service.getUser(user).subscribe( res => {
            // expect(res).toBeUndefined();
        },
            error => {
                expect(error.status).toEqual(404);
                done();
        }
        )
    });

});