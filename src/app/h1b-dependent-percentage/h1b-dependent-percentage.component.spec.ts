import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1bDependentPercentageComponent } from './h1b-dependent-percentage.component';

describe('H1bDependentPercentageComponent', () => {
  let component: H1bDependentPercentageComponent;
  let fixture: ComponentFixture<H1bDependentPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1bDependentPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1bDependentPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
