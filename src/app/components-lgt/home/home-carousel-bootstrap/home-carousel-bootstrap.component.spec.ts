import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselBootstrapComponent } from './home-carousel-bootstrap.component';

describe('HomeCarouselBootstrapComponent', () => {
  let component: HomeCarouselBootstrapComponent;
  let fixture: ComponentFixture<HomeCarouselBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarouselBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarouselBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
