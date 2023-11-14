import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecedentsComponent } from './precedents.component';

describe('PrecedentsComponent', () => {
  let component: PrecedentsComponent;
  let fixture: ComponentFixture<PrecedentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecedentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
