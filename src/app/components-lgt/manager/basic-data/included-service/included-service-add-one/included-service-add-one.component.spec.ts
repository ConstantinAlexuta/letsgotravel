import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceAddOneComponent } from './included-service-add-one.component';

describe('IncludedServiceAddOneComponent', () => {
  let component: IncludedServiceAddOneComponent;
  let fixture: ComponentFixture<IncludedServiceAddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceAddOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceAddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
