import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecineListComponent } from './medecine-list.component';

describe('MedecineListComponent', () => {
  let component: MedecineListComponent;
  let fixture: ComponentFixture<MedecineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
