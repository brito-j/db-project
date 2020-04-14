import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1bAgentComponent } from './h1b-agent.component';

describe('H1bAgentComponent', () => {
  let component: H1bAgentComponent;
  let fixture: ComponentFixture<H1bAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1bAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1bAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
