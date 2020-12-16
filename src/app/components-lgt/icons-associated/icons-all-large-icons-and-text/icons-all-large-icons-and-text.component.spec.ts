import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAllLargeIconsAndTextComponent } from './icons-all-large-icons-and-text.component';

describe('IconsAllLargeIconsAndTextComponent', () => {
  let component: IconsAllLargeIconsAndTextComponent;
  let fixture: ComponentFixture<IconsAllLargeIconsAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsAllLargeIconsAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAllLargeIconsAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
