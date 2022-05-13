import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users.service';
import { MockListProfileUsers } from 'src/app/mocks/list-of-profileUsers.mock';
import { mockUsersArray } from 'src/app/mocks/users_array.mock';
import { ListOfUsersComponent } from './list-of-users.component';
import { of } from 'rxjs';
import { UserProfile } from 'src/app/models/Profile.model';

describe('ListOfUsersComponent', () => {
  // test Service and test create component
  let component: ListOfUsersComponent;
  let fixture: ComponentFixture<ListOfUsersComponent>;
  let userService: UsersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfUsersComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'list-of-users', component: ListOfUsersComponent }
        ])
      ],
      providers: [UsersService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfUsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();

  }));

  // create component and test if it is created
  it('should create list-of-users component', () => {
    expect(component).toBeTruthy();
  });

  // test openProfile() with username mojombo
  it('should open profile with username mojombo', () => {
    component.openProfile('mojombo');
    expect(component.openProfile).toBeTruthy();
  });

  // test userService.getUsers()
  it('should get users from service', () => {
    const spy = spyOn(userService, 'getUsers').and.returnValue(of(mockUsersArray));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  // test this.UserService.getUser() function
  it('should get user from service', () => {
    const response: UserProfile = MockListProfileUsers[0];
    const spy = spyOn(userService, 'getUser').and.returnValue(of(response));
    userService.getUser('mojombo');
    expect(spy).toHaveBeenCalled();
  });

  // test replaceSpaces function test if it replaces the spaces
  it('should replace spaces', () => {
    const response: string = 'mojombo%20bye-bye';
    expect(component.replaceSpaces('mojombo bye-bye')).toBe(response);
  });

  // test getUser function
  it('should get user when calls function', () => {
    const response: UserProfile = MockListProfileUsers[0];
    const spy = spyOn(userService, 'getUser').and.returnValue(of(response));
    component.getUser(mockUsersArray);
    expect(spy).toHaveBeenCalled();
  });

});



