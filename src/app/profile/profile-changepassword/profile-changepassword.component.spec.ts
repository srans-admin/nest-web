import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChangepasswordComponent } from './profile-changepassword.component';

describe('ProfileChangepasswordComponent', () => {
  let component: ProfileChangepasswordComponent;
  let fixture: ComponentFixture<ProfileChangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
