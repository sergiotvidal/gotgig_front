import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ValidationMessagesComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [RegisterComponent, LoginComponent, ValidationMessagesComponent]
})
export class SharedModule { }
