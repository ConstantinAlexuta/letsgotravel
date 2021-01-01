import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBasicsDataComponent } from './offers-basics-data.component';

describe('OffersBasicsDataComponent', () => {
  let component: OffersBasicsDataComponent;
  let fixture: ComponentFixture<OffersBasicsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersBasicsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBasicsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
