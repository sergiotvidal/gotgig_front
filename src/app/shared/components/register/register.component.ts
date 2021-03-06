import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPasswordValidator } from '../../validators/match-password.validator';
import { AuthService } from '../../../core/services/auth.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { MailValidator } from '../../validators/mail.validator';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    full_name: ["", [Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email, MailValidator]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]]
  },
  { validators: MatchPasswordValidator });
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              public formsService: FormsService,
              private modalService: ModalService) { }

  register() {
    const { full_name, email, password } = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService.register({ full_name, email, password }).subscribe(() => {
        this.registerForm.reset();
        this.modalService.open('Gracias por registrarte :D',
        'Comprueba la bandeja de entrada de tu email y sigue las instrucciones para activar tu cuenta');
      });
    }
  }
}
