import { TestBed, inject } from '@angular/core/testing';

import { MovimentoRepositoryService } from './movimento-repository.service';

describe('MovimentoRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimentoRepositoryService]
    });
  });

  it('should ...', inject([MovimentoRepositoryService], (service: MovimentoRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
