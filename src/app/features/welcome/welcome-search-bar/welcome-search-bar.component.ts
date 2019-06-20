import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsService } from '../../../core/services/forms.service';
import { SearchService } from '../../../core/services/search.service';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-search-bar',
  templateUrl: './welcome-search-bar.component.html',
  styleUrls: ['./welcome-search-bar.component.scss']
})
export class WelcomeSearchBarComponent implements OnInit {
  @ViewChild('searchText', { static: true }) inputElement;

  constructor(public formsService: FormsService, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.inputElement.nativeElement.value).subscribe();
    this.router.navigate(['/search']);
  }
}
