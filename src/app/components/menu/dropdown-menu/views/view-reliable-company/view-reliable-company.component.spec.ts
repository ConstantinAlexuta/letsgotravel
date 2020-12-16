import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReliableCompanyComponent } from './view-reliable-company.component';

describe('ViewReliableCompanyComponent', () => {
  let component: ViewReliableCompanyComponent;
  let fixture: ComponentFixture<ViewReliableCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReliableCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReliableCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
