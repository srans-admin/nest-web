import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostelComponent } from './add-hostel.component';

describe('AddHostelComponent', () => {
  let component: AddHostelComponent;
  let fixture: ComponentFixture<AddHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
