import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderFormComponent } from './client-order-form.component';

describe('ClientOrderFormComponent', () => {
  let component: ClientOrderFormComponent;
  let fixture: ComponentFixture<ClientOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
