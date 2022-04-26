import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
import { SearchFilterPipe } from '../../search-filter.pipe';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {

  listUsers = [];
  searchText: string;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.listUsers = data;
      // console.log(this.listUsers);
    });
  }

  openProfile(loginName: string) {
    this.router.navigate(['/profile-info', loginName]);
  }

  onSearchChange(event: CustomEvent) {
    console.log(event.detail.value);

    // search event.detail.value in listUsers, if find it, show the user Profile
  }

}
