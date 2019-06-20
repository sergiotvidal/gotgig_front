import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { FormsService } from '../../../core/services/forms.service';
import { MailValidator } from '../../validators/mail.validator';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, MailValidator]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })
  constructor(private fb: FormBuilder,
    private AuthService: AuthService,
    public formsService: FormsService,
    private router: Router,
    private userService: UserService) { }

  login() {
    if (this.loginForm.valid) {
      this.AuthService.login(this.loginForm.value).subscribe(
      () => {
        this.userService.getUserData().subscribe();
        this.router.navigate(['/user']);
      },
      () => this.loginForm.get("password").setValue("")
      );
    }
  }
}
