import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkContractFooterThinComponent } from './framework-contract-footer-thin.component';

describe('FrameworkContractFooterThinComponent', () => {
  let component: FrameworkContractFooterThinComponent;
  let fixture: ComponentFixture<FrameworkContractFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkContractFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkContractFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
