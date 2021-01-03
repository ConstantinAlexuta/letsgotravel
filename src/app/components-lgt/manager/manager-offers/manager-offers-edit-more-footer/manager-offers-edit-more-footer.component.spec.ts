import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditMoreFooterComponent } from './manager-offers-edit-more-footer.component';

describe('ManagerOffersEditMoreFooterComponent', () => {
  let component: ManagerOffersEditMoreFooterComponent;
  let fixture: ComponentFixture<ManagerOffersEditMoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditMoreFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditMoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
