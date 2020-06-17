import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecineFormComponent } from './medecine-form.component';

describe('MedecineFormComponent', () => {
  let component: MedecineFormComponent;
  let fixture: ComponentFixture<MedecineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
