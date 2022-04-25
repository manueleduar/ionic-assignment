import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { UsersService } from '../../../../services/users.service';
import { request } from "@octokit/request";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss'],
})
export class ListOfUsersComponent implements OnInit {

  constructor(private httpClient: HttpClient, private userService: UsersService) { }

  users = [];
  userInfoArray = [];

  // init app
  ngOnInit() {
    console.log('init app');

    // use the userService to get the user
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);

    // get repositories of each user
    // this.users.forEach(user => {
    //   this.userService.getRepos(user.login).subscribe(repos => {
    //     console.log(repos);
    //   }, 
    //   error => {
    //     console.log(error);
    //   });
    // } );

    // get user of each user array
    this.users.forEach(user => {
      this.userService.getUser(user.login).subscribe(userInformation => {
        this.userInfoArray = userInformation;
        console.log(userInformation);
      }, 
      error => {
        console.log(error);
      }); });
    });
  }

}
