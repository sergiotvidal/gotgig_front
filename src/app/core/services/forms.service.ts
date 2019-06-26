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
    this.loginOpened = false;
  }

  registerClose() {
    this.registerOpened = false;
  }

  loginOpen() {
    this.loginOpened = true;
    this.registerOpened = false;
  }

  loginClose() {
    this.loginOpened = false;
  }
}
