import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableCompanyFooterComponent } from './reliable-company-footer.component';

describe('ReliableCompanyFooterComponent', () => {
  let component: ReliableCompanyFooterComponent;
  let fixture: ComponentFixture<ReliableCompanyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliableCompanyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableCompanyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
