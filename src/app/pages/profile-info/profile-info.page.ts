import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from '../../../../services/users.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
  key: string;
  profile_user: Object;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    console.log('init app');
    console.log(this.key);

    // use the function getUser to get the user info
    this.userService.getUser(this.key).subscribe(data => {
      this.profile_user = data;
      console.log(this.profile_user);
    });
  }

}
