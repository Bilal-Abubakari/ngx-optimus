import { TestBed } from '@angular/core/testing';

import { OptimusPipesService } from './optimus-pipes.service';

describe('OptimusPipesService', () => {
  let service: OptimusPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimusPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
