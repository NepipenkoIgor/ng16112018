import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), this._nameValidator]],
      lastName: ['', [Validators.required, Validators.minLength(5)], [this._nameAsyncValidator]],
      emails: this._fb.array([this._fb.control('')]),
      male: [true],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        pconfirm: ['', [Validators.required, Validators.minLength(5)]],
      }),
    });
    // tslint:disable-next-line
    this.signUpForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
    setTimeout(() => {
      this.signUpForm.patchValue({lastName: 'Nepipenko'}, {emitEvent: false});
    }, 7000);
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this._fb.control(''));
  }

  public removeEmail(i: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(i);
  }

  private _nameValidator({value}: FormControl): ValidationErrors | null {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const error: ValidationErrors | null = valid
      ? null
      : {nospicial: 'Только буквы'};
    return error;
  }


  private _nameAsyncValidator({value}: FormControl): Observable<ValidationErrors | null> {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const error: ValidationErrors | null = valid
      ? null
      : {nospicial: 'Только буквы'};
    return of(error).pipe(delay(5000));
  }
}
