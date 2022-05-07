import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../components/explore-container/explore-container.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Tab1Page } from './tab1.page';

describe('Feed page Tab', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponentModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'tab1', component: Tab1Page }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  }));

  // create component
  it('should create Feed page tab', () => {
    expect(component).toBeTruthy();
  });
  
});
