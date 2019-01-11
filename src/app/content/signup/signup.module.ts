import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [
    SignupComponent,
    SwitcherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent
      }
    ])
  ]
})
// tslint:disable-next-line
export default class SignupModule {
}
