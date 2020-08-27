import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutItemListComponent } from './checkout-item-list.component';

describe('CheckoutItemListComponent', () => {
  let component: CheckoutItemListComponent;
  let fixture: ComponentFixture<CheckoutItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
