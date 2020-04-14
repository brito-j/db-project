import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocNameCountComponent } from './soc-name-count.component';

describe('SocNameCountComponent', () => {
  let component: SocNameCountComponent;
  let fixture: ComponentFixture<SocNameCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocNameCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocNameCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
