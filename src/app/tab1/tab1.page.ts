import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private httpClient: HttpClient, private userService: UsersService) {}

  // init app
  ngOnInit() {
    console.log('init app');
  }

}

