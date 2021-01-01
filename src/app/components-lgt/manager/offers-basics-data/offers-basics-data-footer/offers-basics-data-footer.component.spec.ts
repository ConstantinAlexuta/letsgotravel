import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBasicsDataFooterComponent } from './offers-basics-data-footer.component';

describe('OffersBasicsDataFooterComponent', () => {
  let component: OffersBasicsDataFooterComponent;
  let fixture: ComponentFixture<OffersBasicsDataFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersBasicsDataFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBasicsDataFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
