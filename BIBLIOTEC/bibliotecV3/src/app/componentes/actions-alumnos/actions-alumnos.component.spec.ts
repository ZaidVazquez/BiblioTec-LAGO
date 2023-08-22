import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAlumnosComponent } from './actions-alumnos.component';

describe('ActionsAlumnosComponent', () => {
  let component: ActionsAlumnosComponent;
  let fixture: ComponentFixture<ActionsAlumnosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ActionsAlumnosComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ActionsAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});