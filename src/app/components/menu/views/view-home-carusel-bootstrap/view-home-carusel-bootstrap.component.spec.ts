import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeCaruselBootstrapComponent } from './view-home-carusel-bootstrap.component';

describe('ViewHomeCaruselBootstrapComponent', () => {
  let component: ViewHomeCaruselBootstrapComponent;
  let fixture: ComponentFixture<ViewHomeCaruselBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeCaruselBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeCaruselBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
