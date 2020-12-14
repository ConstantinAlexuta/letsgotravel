import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengGalleriaIndicatorComponent } from './primeng-galleria-indicator.component';

describe('PrimengGalleriaIndicatorComponent', () => {
  let component: PrimengGalleriaIndicatorComponent;
  let fixture: ComponentFixture<PrimengGalleriaIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengGalleriaIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengGalleriaIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
