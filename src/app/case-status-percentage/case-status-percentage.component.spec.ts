import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatusPercentageComponent } from './case-status-percentage.component';

describe('CaseStatusPercentageComponent', () => {
  let component: CaseStatusPercentageComponent;
  let fixture: ComponentFixture<CaseStatusPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStatusPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStatusPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
