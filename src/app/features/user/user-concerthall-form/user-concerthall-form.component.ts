import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-concerthall-form',
  templateUrl: './user-concerthall-form.component.html',
  styleUrls: ['./user-concerthall-form.component.scss']
})
export class UserConcerthallFormComponent implements OnInit {
  concerthallForm = this.fb.group({
    full_name: ['', [Validators.minLength(2), Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    phone_number: [''],
    website: [''],
    description: [''],
  });

  constructor(private fb: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addConcerthall() {
    const { full_name, street, number, zip, website,  phone_number, description, city } =
     this.concerthallForm.value;

    if (this.concerthallForm.valid) {
      this.userService.addConcerthall({ full_name, street, number, zip, website,  phone_number, description, city  }).subscribe();
      this.userService.getUserData();
      this.refresh();

    }
  }

  refresh(): void {
    window.location.reload();
  }
}
