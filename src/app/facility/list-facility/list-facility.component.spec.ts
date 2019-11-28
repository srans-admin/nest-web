import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacilityComponent } from './list-facility.component';

describe('ListFacilityComponent', () => {
  let component: ListFacilityComponent;
  let fixture: ComponentFixture<ListFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
