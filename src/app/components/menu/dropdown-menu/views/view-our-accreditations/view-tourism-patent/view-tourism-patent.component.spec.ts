import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTourismPatentComponent } from './view-tourism-patent.component';

describe('ViewTourismPatentComponent', () => {
  let component: ViewTourismPatentComponent;
  let fixture: ComponentFixture<ViewTourismPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTourismPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTourismPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
