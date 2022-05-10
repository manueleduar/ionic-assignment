import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Users } from 'src/app/interfaces/Users.interface';
import { UserProfile } from 'src/app/interfaces/Profile.interface';
import { MockListProfileUsers } from 'src/app/mocks/list-of-profileUsers.mock';
import { UsersService } from './users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SpecReporter } from 'jasmine-spec-reporter';
import { of } from 'rxjs';

