import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../core/services/forms.service';

@Component({
  selector: 'app-welcome-forms',
  templateUrl: './welcome-forms.component.html',
  styleUrls: ['./welcome-forms.component.scss']
})
export class WelcomeFormsComponent implements OnInit {

  constructor(public formsService: FormsService) { }

  ngOnInit() {
  }

}
