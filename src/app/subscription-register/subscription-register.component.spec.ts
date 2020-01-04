import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionRegisterComponent } from './subscription-register.component';

describe('SubscriptionRegisterComponent', () => {
  let component: SubscriptionRegisterComponent;
  let fixture: ComponentFixture<SubscriptionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
