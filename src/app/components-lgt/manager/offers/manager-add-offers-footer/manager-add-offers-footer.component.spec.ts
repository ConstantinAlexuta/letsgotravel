import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddOffersFooterComponent } from './manager-add-offers-footer.component';

describe('ManagerAddOffersFooterComponent', () => {
  let component: ManagerAddOffersFooterComponent;
  let fixture: ComponentFixture<ManagerAddOffersFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddOffersFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddOffersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
