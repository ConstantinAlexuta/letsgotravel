import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskSomethingComponent } from './ask-something.component';

describe('AskSomethingComponent', () => {
  let component: AskSomethingComponent;
  let fixture: ComponentFixture<AskSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskSomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
