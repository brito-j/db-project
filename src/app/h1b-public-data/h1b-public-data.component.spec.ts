import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1bPublicDataComponent } from './h1b-public-data.component';

describe('H1bPublicDataComponent', () => {
  let component: H1bPublicDataComponent;
  let fixture: ComponentFixture<H1bPublicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1bPublicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1bPublicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
