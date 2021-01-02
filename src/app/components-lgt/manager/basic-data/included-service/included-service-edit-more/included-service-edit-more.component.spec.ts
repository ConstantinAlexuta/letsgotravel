import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceEditMoreComponent } from './included-service-edit-more.component';

describe('IncludedServiceEditMoreComponent', () => {
  let component: IncludedServiceEditMoreComponent;
  let fixture: ComponentFixture<IncludedServiceEditMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceEditMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceEditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
