import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedReservationComponent } from './bed-reservation.component';

describe('BedReservationComponent', () => {
  let component: BedReservationComponent;
  let fixture: ComponentFixture<BedReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
