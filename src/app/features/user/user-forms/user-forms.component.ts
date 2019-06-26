import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsService } from '../../../core/services/forms.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalFormService } from '../../../core/services/modal-form.service';
import { ConcertsData } from '../../../core/core.models';

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

  constructor(public userService: UserService, public modalformService: ModalFormService) { }

  showConcerthallForm() {
    this.hideData = !this.hideData;
    this.showForm = !this.showForm;
  }

  editConcerthall() {
  }

  deleteConcerthall(idConcerthall) {
    this.userService.deleteConcerthall(idConcerthall).subscribe((data) => {
      const locals = this.userService.userData.concerthallsData.filter(local => local.id_localhall !== idConcerthall);
      this.userService.userData.concerthallsData = locals;
    });
  }

  editConcert() {

  }

  deleteConcert(idConcert, idConcerthall) {
    this.userService.deleteConcert(idConcert, idConcerthall).subscribe((data)=>{
      const concerts = this.userService.userData.concertsData.filter(concert => concert.id_concert !== idConcert);
      this.userService.userData.concertsData = concerts;
    });
  }

  refresh(): void {
    window.location.reload();
  }
}

