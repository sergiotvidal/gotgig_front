import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent {

  constructor() { }

  @Input() control: FormControl;
  @Input() group: FormGroup;
}
