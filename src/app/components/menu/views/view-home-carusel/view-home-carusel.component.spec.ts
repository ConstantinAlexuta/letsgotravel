import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeCaruselComponent } from './view-home-carusel.component';

describe('ViewHomeCaruselComponent', () => {
  let component: ViewHomeCaruselComponent;
  let fixture: ComponentFixture<ViewHomeCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
