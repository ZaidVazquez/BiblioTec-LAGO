import { TestBed } from '@angular/core/testing';

import {EditorialService} from './editorial.service'

describe('editorialService', () => {
  let service: EditorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});