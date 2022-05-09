import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { Users } from 'src/app/interfaces/Users.interface';

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

    // get user of each user array
    this.users.forEach(user => {
      let userName = user.login.includes(' ') ? user.login.replace(' ', '%20') : user.login;
      this.userService.getUser(userName).subscribe(userInformation => {
        this.userInfoArray.push(userInformation);
      }, 
      error => {
        console.log(error);
      }); });
    });
  }

  openProfile(username: string) {
    this.router.navigate(['/profile-info/', username]);
  }

}
