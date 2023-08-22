import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsLibrosComponent } from './actions-libros.component';

describe('ActionsLibrosComponent', () => {
  let component: ActionsLibrosComponent;
  let fixture: ComponentFixture<ActionsLibrosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ActionsLibrosComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ActionsLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});