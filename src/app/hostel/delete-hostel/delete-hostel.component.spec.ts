import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHostelComponent } from './delete-hostel.component';

describe('DeleteHostelComponent', () => {
  let component: DeleteHostelComponent;
  let fixture: ComponentFixture<DeleteHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
