import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPatentComponent } from './tourism-patent.component';

describe('TourismPatentComponent', () => {
  let component: TourismPatentComponent;
  let fixture: ComponentFixture<TourismPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
