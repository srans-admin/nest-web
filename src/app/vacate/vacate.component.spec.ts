import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacateComponent } from './vacate.component';

describe('VacateComponent', () => {
  let component: VacateComponent;
  let fixture: ComponentFixture<VacateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
