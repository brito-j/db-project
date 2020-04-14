import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaClassCountComponent } from './visa-class-count.component';

describe('VisaClassCountComponent', () => {
  let component: VisaClassCountComponent;
  let fixture: ComponentFixture<VisaClassCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaClassCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaClassCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
