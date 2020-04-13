import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteInfoComponent } from './worksite-info.component';

describe('WorksiteInfoComponent', () => {
  let component: WorksiteInfoComponent;
  let fixture: ComponentFixture<WorksiteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksiteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
