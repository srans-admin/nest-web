import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDetailsComponent } from './management-details.component';

describe('ManagementDetailsComponent', () => {
  let component: ManagementDetailsComponent;
  let fixture: ComponentFixture<ManagementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
