import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacateRequestComponent } from './vacate-request.component';

describe('VacateRequestComponent', () => {
  let component: VacateRequestComponent;
  let fixture: ComponentFixture<VacateRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacateRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
