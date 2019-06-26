import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { UserData, ConcerthallsData } from '../../../core/core.models';
import { ModalFormService } from '../../../core/services/modal-form.service';

@Component({
  selector: 'app-modal-concert-form',
  templateUrl: './modal-concert-form.component.html',
  styleUrls: ['./modal-concert-form.component.scss']
})
export class ModalConcertFormComponent {
  concertForm = this.fb.group({
    band: ['', [Validators.minLength(2), Validators.required]],
    date: ['', [Validators.required]],
    hour: [''],
    style: [''],
    tickets: [''],
    website: [''],
    description: [''],
  });

  @Input() idLocal;
  @Input() idConcert;

  constructor(public userService: UserService, private fb: FormBuilder, public modalFormService: ModalFormService) { }

  addConcert(idLocal) {
    const { band, date, hour, style, tickets, website, description } = this.concertForm.value;

    if (this.concertForm.valid) {
      this.userService.addConcert({ band, date, hour, style, tickets, website, description, idLocal }).subscribe();
      this.modalFormService.close();
      this.userService.getUserData();
      setTimeout(() => {
        this.refresh();
      }, 500);

    }
  }

  refresh(): void {
    window.location.reload();
  }
}
