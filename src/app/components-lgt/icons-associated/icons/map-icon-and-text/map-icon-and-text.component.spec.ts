import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIconAndTextComponent } from './map-icon-and-text.component';

describe('MapIconAndTextComponent', () => {
  let component: MapIconAndTextComponent;
  let fixture: ComponentFixture<MapIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
