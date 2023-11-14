import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAvailabilityComponent } from './budget-availability.component';

describe('BudgetAvailabilityComponent', () => {
  let component: BudgetAvailabilityComponent;
  let fixture: ComponentFixture<BudgetAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
