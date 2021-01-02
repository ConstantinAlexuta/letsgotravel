import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceEditOneComponent } from './included-service-edit-one.component';

describe('IncludedServiceEditOneComponent', () => {
  let component: IncludedServiceEditOneComponent;
  let fixture: ComponentFixture<IncludedServiceEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
