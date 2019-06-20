import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsService } from '../../../core/services/forms.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent {

  // concerthallForm: FormGroup = this.fb.group({
  //   full_name: ['', [Validators.minLength(2), Validators.required]],
  //   direction: ['', [Validators.required]],
  //   number: ['', [Validators.required]],
  //   city: ['', [Validators.required]],
  //   zip: ['', [Validators.required]],
  //   phone_number: [''],
  //   website: [''],
  //   description: ['', [Validators.minLength(20)]]
  // });

  showForm = false;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  showConcerthallForm() {
    this.showForm = true;
  }

  addConcerthall() {

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
