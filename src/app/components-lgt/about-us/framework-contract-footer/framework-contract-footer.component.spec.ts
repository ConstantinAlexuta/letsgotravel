import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkContractFooterComponent } from './framework-contract-footer.component';

describe('FrameworkContractFooterComponent', () => {
  let component: FrameworkContractFooterComponent;
  let fixture: ComponentFixture<FrameworkContractFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkContractFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkContractFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
