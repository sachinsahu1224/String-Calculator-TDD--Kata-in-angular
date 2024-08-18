import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorTddComponent } from './string-calculator-tdd.component';

describe('StringCalculatorTddComponent', () => {
  let component: StringCalculatorTddComponent;
  let fixture: ComponentFixture<StringCalculatorTddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCalculatorTddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCalculatorTddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
