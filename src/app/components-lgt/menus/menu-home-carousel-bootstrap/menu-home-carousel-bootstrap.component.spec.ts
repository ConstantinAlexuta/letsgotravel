import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeCarouselBootstrapComponent } from './menu-home-carousel-bootstrap.component';

describe('MenuHomeCarouselBootstrapComponent', () => {
  let component: MenuHomeCarouselBootstrapComponent;
  let fixture: ComponentFixture<MenuHomeCarouselBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomeCarouselBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeCarouselBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
