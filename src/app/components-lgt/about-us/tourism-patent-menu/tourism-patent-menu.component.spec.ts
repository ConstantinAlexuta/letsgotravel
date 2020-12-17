import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPatentMenuComponent } from './tourism-patent-menu.component';

describe('TourismPatentMenuComponent', () => {
  let component: TourismPatentMenuComponent;
  let fixture: ComponentFixture<TourismPatentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismPatentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismPatentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
