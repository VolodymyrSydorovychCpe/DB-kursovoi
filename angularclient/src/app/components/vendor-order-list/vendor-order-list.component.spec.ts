import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrderListComponent } from './vendor-order-list.component';

describe('VendorOrderListComponent', () => {
  let component: VendorOrderListComponent;
  let fixture: ComponentFixture<VendorOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
