import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPrimengComponent } from './carousel-primeng.component';

describe('CarouselPrimengComponent', () => {
  let component: CarouselPrimengComponent;
  let fixture: ComponentFixture<CarouselPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
