import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableCompanyComponent } from './reliable-company.component';

describe('ReliableCompanyComponent', () => {
  let component: ReliableCompanyComponent;
  let fixture: ComponentFixture<ReliableCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliableCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
