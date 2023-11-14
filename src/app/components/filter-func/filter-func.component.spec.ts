import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFuncComponent } from './filter-func.component';

describe('FilterFuncComponent', () => {
  let component: FilterFuncComponent;
  let fixture: ComponentFixture<FilterFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterFuncComponent]
    });
    fixture = TestBed.createComponent(FilterFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
