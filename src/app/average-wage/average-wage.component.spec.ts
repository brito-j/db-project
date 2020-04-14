import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageWageComponent } from './average-wage.component';

describe('AverageWageComponent', () => {
  let component: AverageWageComponent;
  let fixture: ComponentFixture<AverageWageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageWageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageWageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
