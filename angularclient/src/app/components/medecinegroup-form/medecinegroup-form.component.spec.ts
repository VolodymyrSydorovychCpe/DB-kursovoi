import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinegroupFormComponent } from './medecinegroup-form.component';

describe('MedecinegroupFormComponent', () => {
  let component: MedecinegroupFormComponent;
  let fixture: ComponentFixture<MedecinegroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinegroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinegroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
