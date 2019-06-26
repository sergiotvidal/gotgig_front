import { Component, OnInit } from '@angular/core';
import { SearchService } from './core/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private searchService: SearchService, private router: Router) {}
  title = 'gotgigfront';
}
