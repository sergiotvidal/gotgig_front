import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
registerOpened = false;
loginOpened = false;
  constructor() { }

  registerOpen() {
    this.registerOpened = true;
  }

  registerClose() {
    this.registerOpened = false;
  }

  loginOpen() {
    this.loginOpened = true;
  }

  loginClose() {
    this.loginOpened = false;
  }
}
