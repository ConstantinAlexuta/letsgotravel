import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableCompanyMenuComponent } from './reliable-company-menu.component';

describe('ReliableCompanyMenuComponent', () => {
  let component: ReliableCompanyMenuComponent;
  let fixture: ComponentFixture<ReliableCompanyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliableCompanyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableCompanyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
