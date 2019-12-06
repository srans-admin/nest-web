import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHostelComponent } from './edit-hostel.component';

describe('EditHostelComponent', () => {
  let component: EditHostelComponent;
  let fixture: ComponentFixture<EditHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
