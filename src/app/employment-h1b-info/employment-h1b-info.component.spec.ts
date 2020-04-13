import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentH1bInfoComponent } from './employment-h1b-info.component';

describe('EmploymentH1bInfoComponent', () => {
  let component: EmploymentH1bInfoComponent;
  let fixture: ComponentFixture<EmploymentH1bInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentH1bInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentH1bInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
