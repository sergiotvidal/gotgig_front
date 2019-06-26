import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { MarkAsTouchedDirective } from './directives/mark-as-touched.directive';
import { MailValidator } from './validators/mail.validator';
import { MatchPasswordValidator } from './validators/match-password.validator';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../layout/modal/modal.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [RegisterComponent,
    LoginComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, FormsModule, LayoutModule
  ],
  exports: [RegisterComponent,
    LoginComponent,
    ValidationMessagesComponent]
})
export class SharedModule { }
