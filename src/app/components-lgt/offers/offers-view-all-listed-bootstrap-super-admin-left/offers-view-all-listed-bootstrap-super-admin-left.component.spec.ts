import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedBootstrapSuperAdminLeftComponent } from './offers-view-all-listed-bootstrap-super-admin-left.component';

describe('OffersViewAllListedBootstrapSuperAdminLeftComponent', () => {
  let component: OffersViewAllListedBootstrapSuperAdminLeftComponent;
  let fixture: ComponentFixture<OffersViewAllListedBootstrapSuperAdminLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedBootstrapSuperAdminLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedBootstrapSuperAdminLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
