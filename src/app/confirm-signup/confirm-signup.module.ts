import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmSignupPageRoutingModule } from './confirm-signup-routing.module';


import { ConfirmSignupPage } from './confirm-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfirmSignupPageRoutingModule
  ],
  declarations: [ConfirmSignupPage]
})
export class ConfirmSignupPageModule { }
