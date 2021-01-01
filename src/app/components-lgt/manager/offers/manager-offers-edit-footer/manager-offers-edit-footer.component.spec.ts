import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditFooterComponent } from './manager-offers-edit-footer.component';

describe('ManagerOffersEditFooterComponent', () => {
  let component: ManagerOffersEditFooterComponent;
  let fixture: ComponentFixture<ManagerOffersEditFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
