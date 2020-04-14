import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1bCertifiedComponent } from './h1b-certified.component';

describe('H1bCertifiedComponent', () => {
  let component: H1bCertifiedComponent;
  let fixture: ComponentFixture<H1bCertifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1bCertifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1bCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
