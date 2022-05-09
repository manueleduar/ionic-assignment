import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Users } from 'src/app/interfaces/Users.interface';
import { UserProfile } from 'src/app/interfaces/Profile.interface';
import { MockListProfileUsers } from 'src/app/mocks/list-of-profileUsers.mock';
import { UsersService } from './users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SpecReporter } from 'jasmine-spec-reporter';
import { of } from 'rxjs';


describe('UsersService', () => {
  let service: UsersService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let component: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],

      providers: [
        UsersService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created users service', () => {
    expect(service).toBeTruthy();
  });

  // test http service getUsers
  it('should return an Observable<Users[]>', () => {
    httpClientSpy.get.and.returnValue(of(MockListProfileUsers));
    service.getUsers().subscribe(users => {
      expect(users).toEqual(MockListProfileUsers);
    });
  });

  // test http service getUser
  it('should return an Observable<UserProfile>', () => {
    httpClientSpy.get.and.returnValue(of(MockListProfileUsers[0]));
    service.getUser('username').subscribe(user => {
      expect(user).toEqual(MockListProfileUsers[0]);
    });
  });
});
