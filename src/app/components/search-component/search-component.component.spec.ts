import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../models/Users.model';
import { mockUsersArray } from '../../mocks/users_array.mock';
import { MockListProfileUsers } from '../../mocks/list-of-profileUsers.mock';
import { SearchComponentComponent } from './search-component.component';
import { Mock } from 'protractor/built/driverProviders';
import { of } from 'rxjs';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;
  let userService: UsersService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponentComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        Ng2SearchPipeModule,
        RouterTestingModule.withRoutes([
          { path: 'search-component', component: SearchComponentComponent }
        ])
      ],
      providers: [UsersService, HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();
  }));

   // test creating component and testing if it is created
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
  // test if search is working with ngmodel searchText and Ng2SearchPipeModule
  it('should search', () => {
    component.searchText = 'userRandom';
    component.ngOnInit();
    expect(component.searchText).toBe('userRandom');
  });


  // test function getUsers from localStorage.getItem('users')
  it('should get users from localStorage', () => {
    component.getUsers();
    expect(component.listUsers).toEqual(mockUsersArray);
  });

  // open profile test case
  it('should open profile', () => {
    component.openProfile('userRandom');
    expect(component.openProfile).toBeTruthy();
  });

  // test onSearchChange(event: CustomEvent) 
  it('should detect a custom event the onSearchChange function', () => {
    component.onSearchChange({
      detail: { value: 'userRandom' },
      initCustomEvent: function (type: string, bubbles?: boolean, cancelable?: boolean, detail?: any): void {
        throw new Error('Function not implemented.');
      },
      bubbles: false,
      cancelBubble: false,
      cancelable: false,
      composed: false,
      currentTarget: undefined,
      defaultPrevented: false,
      eventPhase: 0,
      isTrusted: false,
      returnValue: false,
      srcElement: undefined,
      target: undefined,
      timeStamp: 0,
      type: '',
      composedPath: function (): EventTarget[] {
        throw new Error('Function not implemented.');
      },
      initEvent: function (type: string, bubbles?: boolean, cancelable?: boolean): void {
        throw new Error('Function not implemented.');
      },
      preventDefault: function (): void {
        throw new Error('Function not implemented.');
      },
      stopImmediatePropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      stopPropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      AT_TARGET: 0,
      BUBBLING_PHASE: 0,
      CAPTURING_PHASE: 0,
      NONE: 0
    });
    expect(component.onSearchChange).toBeTruthy();
  });

  // test ngOnInit() 
  it('should open ngOnInit search-component', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });

});
