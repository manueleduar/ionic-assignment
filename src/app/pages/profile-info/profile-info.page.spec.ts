import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users.service';
import { UserProfile } from 'src/app/models/Profile.model';
import { MockListProfileUsers } from '../../mocks/list-of-profileUsers.mock';
import { of } from 'rxjs';

import { ProfileInfoPage } from './profile-info.page';

describe('ProfileInfoPage', () => {
  let component: ProfileInfoPage;
  let fixture: ComponentFixture<ProfileInfoPage>;
  let userService: UsersService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInfoPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'profile-info/:key', component: ProfileInfoPage }
        ])
      ],
      providers: [UsersService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileInfoPage);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();

  }));

  // create component and test if it is created
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // test getProfileUser(key: string) function from component
  it('should get profile user from service', () => {
    const response: UserProfile = MockListProfileUsers[0];
    const spy = spyOn(userService, 'getUser').and.returnValue(of(response));
    component.getProfileUser('mojombo');
    expect(spy).toHaveBeenCalled();
  });


});
