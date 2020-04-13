import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAuditComponent } from './employer-audit.component';

describe('EmployerAuditComponent', () => {
  let component: EmployerAuditComponent;
  let fixture: ComponentFixture<EmployerAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
