import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHostelComponent } from './list-hostel.component';

describe('ListHostelComponent', () => {
  let component: ListHostelComponent;
  let fixture: ComponentFixture<ListHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
