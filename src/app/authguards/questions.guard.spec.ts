import { TestBed, async, inject } from '@angular/core/testing';

import { QuestionsGuard } from './questions.guard';

describe('QuestionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsGuard]
    });
  });

  it('should ...', inject([QuestionsGuard], (guard: QuestionsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
