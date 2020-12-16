import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAllShortOnlyIconsComponent } from './icons-all-short-only-icons.component';

describe('IconsAllShortOnlyIconsComponent', () => {
  let component: IconsAllShortOnlyIconsComponent;
  let fixture: ComponentFixture<IconsAllShortOnlyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAllShortOnlyIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAllShortOnlyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
