import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-concerthalls',
  templateUrl: './concerthalls.component.html',
  styleUrls: ['./concerthalls.component.scss']
})
export class ConcerthallsComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }

}
