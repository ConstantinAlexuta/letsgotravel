import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrameworkContractComponent } from './view-framework-contract.component';

describe('ViewFrameworkContractComponent', () => {
  let component: ViewFrameworkContractComponent;
  let fixture: ComponentFixture<ViewFrameworkContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFrameworkContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFrameworkContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
