import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutUsComponent } from './view-about-us.component';

describe('ViewAboutUsComponent', () => {
  let component: ViewAboutUsComponent;
  let fixture: ComponentFixture<ViewAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
