import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedBootstrapAdminRightComponent } from './offers-view-all-listed-bootstrap-admin-right.component';

describe('OffersViewAllListedBootstrapAdminRightComponent', () => {
  let component: OffersViewAllListedBootstrapAdminRightComponent;
  let fixture: ComponentFixture<OffersViewAllListedBootstrapAdminRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedBootstrapAdminRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedBootstrapAdminRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
