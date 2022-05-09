import { UserProfile } from '../interfaces/Profile.interface';


export class User implements UserProfile {
  login: string = '';
  id: number = 0;
  node_id: string = '';
  avatar_url: string = '';
  gravatar_id: string = '';
  url: string = '';
  html_url: string = '';
  followers_url: string = '';
  following_url: string = '';
  gists_url: string = '';
  starred_url: string = '';
  subscriptions_url: string = '';
  organizations_url: string = '';
  repos_url: string = '';
  events_url: string = '';
  received_events_url: string = '';
  type: string = '';
  site_admin: boolean = false;
  name: string = '';
  company: string = '';
  blog: string = '';
  location: string = '';
  email: string = '';
  hireable: boolean = false;
  bio: string = '';
  twitter_username: string = '';
  public_repos: number = 0;
  public_gists: number = 0;
  followers: number = 0;
  following: number = 0;
  created_at: string = '';
  updated_at: string = '';
}