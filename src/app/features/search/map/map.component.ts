import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public searchService: SearchService) {
  }

  ngOnInit() {
  }

}
