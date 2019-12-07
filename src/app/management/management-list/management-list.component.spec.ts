import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementListComponent } from './management-list.component';

describe('ManagementListComponent', () => {
  let component: ManagementListComponent;
  let fixture: ComponentFixture<ManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
