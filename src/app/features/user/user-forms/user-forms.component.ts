import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsService } from '../../../core/services/forms.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
})
@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss'],
})
export class UserFormsComponent {

  showForm = true;
  hideData = false;
  constructor(public userService: UserService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  showConcerthallForm() {
    this.hideData = !this.hideData;
    this.showForm = !this.showForm;
  }

  editConcerthall() {
  }

  deleteConcerthall(idConcerthall) {
    this.userService.deleteConcerthall(idConcerthall).subscribe();
    this.router.navigate(['/user']);
  }

  editConcert() {

  }

  deleteConcert(idConcert,idConcerthall) {
    this.userService.deleteConcert(idConcert, idConcerthall).subscribe();
    this.router.navigate(['/user'])
  }
}
