import { TestBed } from '@angular/core/testing';

import { BooknameService } from './bookname.service';

describe('BooknameService', () => {
  let service: BooknameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooknameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
