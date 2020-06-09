import { TestBed } from '@angular/core/testing';

import { DialogflowService } from './dialogflow.service';

describe('DialogflowService', () => {
  let service: DialogflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
