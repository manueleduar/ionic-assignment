import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UsersService', () => {
    let service: UsersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        })
        service = TestBed.inject(UsersService); // el inject antes se conocía como get
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    }
    );
}
);