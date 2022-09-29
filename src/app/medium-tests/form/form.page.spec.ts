import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormPage } from './form.page';

describe('FormPage', () => {
  let component: FormPage;
  let fixture: ComponentFixture<FormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormPage
      ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form has email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });
  
  it('email is required', () => {
    const email = component.form.get('email');
    email.setValue(''); //invalid
    expect(email.valid).toBeFalse();
  });

  it('email is valid', () => {
    const email = component.form.get('email');
    email.setValue('norte@gmail.com');
    expect(email.valid).toBeTrue();
    email.setValue('norte@'); //invalid
    expect(email.valid).toBeFalsy();
  });


});
