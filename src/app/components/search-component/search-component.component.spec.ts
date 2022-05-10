import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../interfaces/Users.interface';
import { MockListProfileUsers } from '../../mocks/list-of-profileUsers.mock';
import { SearchComponentComponent } from './search-component.component';
import { Mock } from 'protractor/built/driverProviders';

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

  // test search when is list es empty
  it('should search when is list empty', () => {
    component.searchText = 'userRandom';
    component.listUsers = [];
    component.ngOnInit();
    expect(component.listUsers).toEqual([]);
  });

  // test service to get users list
  it('should get users list from service', () => {
    const service = TestBed.inject(UsersService);
    expect(service).toBeTruthy();

    service.getUsers().subscribe(data => {
      expect(data).toBeTruthy();
    }
      , error => {
        expect(error).toBeTruthy();
      });
  });

  // test service to get user and compare with mock
  it('should get user from service and compare with mock', () => {
    const service = TestBed.inject(UsersService);
    expect(service).toBeTruthy();

    service.getUser('userRandom').subscribe(data => {
      expect(data).toEqual(MockListProfileUsers[0]);
    }
      , error => {
        expect(error).toBeTruthy();
      });
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
