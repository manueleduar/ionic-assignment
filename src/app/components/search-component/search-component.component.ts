import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {

  listUsers = [];
  searchText: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  openProfile(loginName: string) {
    this.router.navigate(['/profile-info', loginName]);
  }

  onSearchChange(event: CustomEvent) {
    console.log(event.detail.value);
  }

  getUsers() {
    this.listUsers = JSON.parse(localStorage.getItem('users'));
    console.log(this.listUsers);
  }

}
