import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceAddMoreComponent } from './included-service-add-more.component';

describe('IncludedServiceAddMoreComponent', () => {
  let component: IncludedServiceAddMoreComponent;
  let fixture: ComponentFixture<IncludedServiceAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceAddMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
