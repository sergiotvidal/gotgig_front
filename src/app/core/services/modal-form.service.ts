import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalFormService {
  opened = false;

  open(title: string, content: string) {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
