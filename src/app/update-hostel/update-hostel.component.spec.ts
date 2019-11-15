import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHostelComponent } from './update-hostel.component';

describe('UpdateHostelComponent', () => {
  let component: UpdateHostelComponent;
  let fixture: ComponentFixture<UpdateHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
