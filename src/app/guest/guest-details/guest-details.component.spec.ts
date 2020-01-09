import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDetailsComponent } from './guest-details.component';

describe('GuestDetailsComponent', () => {
  let component: GuestDetailsComponent;
  let fixture: ComponentFixture<GuestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
