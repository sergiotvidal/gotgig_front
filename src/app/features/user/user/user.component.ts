import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // updateOrganizationForm = this.fb.group({
  //   fullName: ['', [Validators.required]],

  // })

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
