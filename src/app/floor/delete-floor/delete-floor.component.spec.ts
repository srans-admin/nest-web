import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFloorComponent } from './delete-floor.component';

describe('DeleteFloorComponent', () => {
  let component: DeleteFloorComponent;
  let fixture: ComponentFixture<DeleteFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
