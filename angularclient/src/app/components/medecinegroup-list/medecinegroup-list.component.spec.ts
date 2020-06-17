import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinegroupListComponent } from './medecinegroup-list.component';

describe('MedecinegroupListComponent', () => {
  let component: MedecinegroupListComponent;
  let fixture: ComponentFixture<MedecinegroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinegroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinegroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
