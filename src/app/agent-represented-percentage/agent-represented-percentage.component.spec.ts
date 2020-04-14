import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRepresentedPercentageComponent } from './agent-represented-percentage.component';

describe('AgentRepresentedPercentageComponent', () => {
  let component: AgentRepresentedPercentageComponent;
  let fixture: ComponentFixture<AgentRepresentedPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRepresentedPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRepresentedPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
