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

  concerthallForm: FormGroup = this.fb.group({
    full_name: ['', [Validators.minLength(2), Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    phone_number: [''],
    website: [''],
    description: ['', [Validators.minLength(20)]]
  });

  showForm = true;
  hideData = false;
  constructor(public userService: UserService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  showConcerthallForm() {
    this.hideData = true;
    this.showForm = false;
    this.addConcerthall();
  }

  addConcerthall() {
    const { full_name, street, number, zip, website,  phone_number, description, city } =
     this.concerthallForm.value;

    if (this.concerthallForm.valid) {
      this.userService.addConcerthall({full_name, street, number, zip, website,  phone_number, description, city  }).subscribe(() => {
          this.router.navigate(['/user'])
      });
    }
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
