/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BikeGuardService } from './bike-guard.service';

describe('Service: BikeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeGuardService]
    });
  });

  it('should ...', inject([BikeGuardService], (service: BikeGuardService) => {
    expect(service).toBeTruthy();
  }));
});