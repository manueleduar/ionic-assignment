import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss'],
})
export class ListOfUsersComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  users : Users[] = [];
  userInfoArray = [];

  // init app
  ngOnInit() {
    console.log('init app');

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      // console.table(this.users);

    // get user of each user array
    this.getUser(this.users);
    });
  }

  openProfile(username: string) {
    this.router.navigate(['/profile-info/', username]);
  }

  replaceSpaces(username: string) {
    return username.includes(' ') ? username.replace(' ', '%20') : username;
  }

  // get each user
  getUser(users: Users[]) {
    users.forEach(user => {
      let userName = this.replaceSpaces(user.login);
      this.userService.getUser(userName).subscribe(userInformation => {
        this.userInfoArray.push(userInformation);
      }, 
      error => {
        console.log(error);
      }); });
  }

}
