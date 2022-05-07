import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../../services/users.service';

import { ListOfUsersComponent } from './list-of-users.component';

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

  // test getUsers service
  it('should get users from service', () => {
    const service = TestBed.inject(UsersService);
    expect(service.getUsers()).toBeTruthy();
  });

});
