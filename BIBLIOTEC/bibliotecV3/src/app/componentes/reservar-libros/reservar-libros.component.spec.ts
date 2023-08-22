import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarLibrosComponent } from './reservar-libros.component';

describe('ReservarLibrosComponent', () => {
  let component: ReservarLibrosComponent;
  let fixture: ComponentFixture<ReservarLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarLibrosComponent]
    });
    fixture = TestBed.createComponent(ReservarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
