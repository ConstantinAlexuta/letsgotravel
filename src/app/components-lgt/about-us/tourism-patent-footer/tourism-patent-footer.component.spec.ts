import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismPatentFooterComponent } from './tourism-patent-footer.component';

describe('TourismPatentFooterComponent', () => {
  let component: TourismPatentFooterComponent;
  let fixture: ComponentFixture<TourismPatentFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismPatentFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismPatentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
