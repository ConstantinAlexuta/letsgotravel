import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersFooterComponent } from './offers-footer.component';

describe('OffersFooterComponent', () => {
  let component: OffersFooterComponent;
  let fixture: ComponentFixture<OffersFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
