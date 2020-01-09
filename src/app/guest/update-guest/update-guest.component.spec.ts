import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuestComponent } from './update-guest.component';

describe('UpdateGuestComponent', () => {
  let component: UpdateGuestComponent;
  let fixture: ComponentFixture<UpdateGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
