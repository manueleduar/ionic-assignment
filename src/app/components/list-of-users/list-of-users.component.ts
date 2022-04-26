import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { UsersService } from '../../../../services/users.service';
import { request } from "@octokit/request";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss'],
})
export class ListOfUsersComponent implements OnInit {

  constructor(private httpClient: HttpClient, private userService: UsersService, private router: Router) { }

  users = [];
  userInfoArray = [];

  // init app
  ngOnInit() {
    console.log('init app');

    // use the userService to get the user
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      // console.log(this.users);

    // get user of each user array
    this.users.forEach(user => {
      let userName = user.login.includes(' ') ? user.login.replace(' ', '%20') : user.login;
      this.userService.getUser(userName).subscribe(userInformation => {
        this.userInfoArray.push(userInformation);
       // console.log(userInformation);
      }, 
      error => {
        console.log(error);
      }); });
    });
  }

  openProfile(username: string) {
    // console.log(username);
    this.router.navigate(['/profile-info/', username]);
  }

}
