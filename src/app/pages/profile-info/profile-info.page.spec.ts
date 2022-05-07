import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../../services/users.service';
import { UserProfile } from 'src/app/interfaces/profile_user';
import { MockListProfileUsers } from '../../mocks/list-of-profileUsers.mock';

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

  // testing getUser service with key
  it('should get user from service using the key parameter', () => {
    const service = TestBed.inject(UsersService);
    const key = 'userRandom';
    expect(service.getUser(key)).toBeTruthy();
    
    service.getUser(key).subscribe(data => {
      expect(data).toBeTrue();
    });
  });

  // testing html rendering
  it('should render html', () => {
    const user: UserProfile = {
      login: 'userRandom',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      twitter_username: null,
      url: 'https://api.github.com/users/userRandom',
      html_url: 'www.github.com/userRandom',
      followers_url: 'https://api.github.com/users/userRandom/followers',
      following_url: 'https://api.github.com/users/userRandom/following{/other_user}',
      gists_url: 'https://api.github.com/users/userRandom/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/userRandom/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/userRandom/subscriptions',
      organizations_url: 'https://api.github.com/users/userRandom/orgs',
      repos_url: 'https://api.github.com/users/userRandom/repos',
      events_url: 'https://api.github.com/users/userRandom/events{/privacy}',
      received_events_url: 'https://api.github.com/users/userRandom/received_events',
      type: 'User',
      site_admin: false,
      name: 'userRandom',
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: null,
      bio: null,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '2019-01-01T00:00:00Z',
      updated_at: '2019-01-01T00:00:00Z'
    };
    component.profile_user = user;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-content').textContent).toContain('userRandom');
  });

  // testing html rendering with wrong user
  it('should not render html', () => {
    const user: UserProfile = {
      login: ' ',
      id: 1,
      node_id: ' ',
      avatar_url: ' ',
      gravatar_id: ' ',
      twitter_username: null,
      url: ' ',
      html_url: ' ',
      followers_url: ' ',
      following_url: ' ',
      gists_url: ' ',
      starred_url: ' ',
      subscriptions_url: ' ',
      organizations_url: ' ',
      repos_url: ' ',
      events_url: ' ',
      received_events_url: ' ',
      type: ' ',
      site_admin: false,
      name: ' ',
      company: ' ',
      blog: ' ',
      location: ' ',
      email: ' ',
      hireable: null,
      bio: null,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: ' ',
      updated_at: ' '
    };
    component.profile_user = user;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-content').textContent).not.toContain('userRandom');
  });
      

});
