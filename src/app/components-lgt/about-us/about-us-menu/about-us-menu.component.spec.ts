import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMenuComponent } from './about-us-menu.component';

describe('AboutUsMenuComponent', () => {
  let component: AboutUsMenuComponent;
  let fixture: ComponentFixture<AboutUsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
