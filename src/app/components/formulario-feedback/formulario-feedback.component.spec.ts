import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFeedbackComponent } from './formulario-feedback.component';

describe('FormularioFeedbackComponent', () => {
  let component: FormularioFeedbackComponent;
  let fixture: ComponentFixture<FormularioFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFeedbackComponent]
    });
    fixture = TestBed.createComponent(FormularioFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
