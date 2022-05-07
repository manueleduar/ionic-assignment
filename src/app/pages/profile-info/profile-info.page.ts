import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { UserProfile } from 'src/app/interfaces/profile_user';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
  key: string;
  profile_user: UserProfile;
  component: { getData: () => { login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string; url: string; html_url: string; followers_url: string; following_url: string; gists_url: string; starred_url: string; subscriptions_url: string; organizations_url: string; repos_url: string; events_url: string; received_events_url: string; type: string; site_admin: string; name: string; company: string; blog: string; location: string; email: string; hireable: string; bio: string; public_repos: string; public_gists: string; followers: string; following: string; created_at: string; updated_at: string; }; };

  constructor(public route: ActivatedRoute, public userService: UsersService) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    console.log('init app');

    // use the function getUser to get the user info
    this.userService.getUser(this.key).subscribe(data => {
      this.profile_user = data;
    });
  }

}
