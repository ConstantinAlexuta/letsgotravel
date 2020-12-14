import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBootstrapComponent } from './carousel-bootstrap.component';

describe('CarouselBootstrapComponent', () => {
  let component: CarouselBootstrapComponent;
  let fixture: ComponentFixture<CarouselBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
