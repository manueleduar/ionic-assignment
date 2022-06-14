import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users.model';
import { UserProfile } from 'src/app/models/profile.model';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss'],
})
export class ListOfUsersComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private userService: UsersService, private router: Router) { }

  users : Users[] = [];
  userInfoArray: UserProfile[] = [];
  per_page: number = 20;

  // init app
  ngOnInit() {
    console.log('init app');

    this.userService.getUsersWithPagination(this.per_page).subscribe(data => {
      this.users = data;
      localStorage.setItem('users', JSON.stringify(this.users));
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
        });
    });
  }

  // get each user with pagination and update users array accordingly
  getUserWithPagination(per_page: number) {
    this.userService.getUsersWithPagination(per_page).subscribe(data => {
      this.users = data;
      localStorage.setItem('users', JSON.stringify(this.users));
      this.getUser(this.users);
    });
  }
  
  // update per_page + 10 and load more users
  loadData(event: InfiniteScrollCustomEvent ) {
    setTimeout(() => {
      event.target.complete();

      this.updatePerPageValue();

      // App logic to determine if all data is loaded
      this.getUserWithPagination(this.per_page);

      // and disable the infinite scroll
      if (this.checkIfDisableInfiniteScroll(this.users.length)) {
        event.target.disabled = true;
      }
    }, 500);

    console.log('load more users: ' + this.per_page);
  }

  checkIfDisableInfiniteScroll(length: number) {
    return length >= 500 ? true : false;
  }

  updatePerPageValue() {
    this.per_page += 10;
  }

}
