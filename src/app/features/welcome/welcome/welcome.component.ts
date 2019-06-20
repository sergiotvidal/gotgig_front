import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../../core/services/forms.service';
import { SearchService } from 'src/app/core/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public formsService: FormsService, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        locationData => {
          this.searchService.search('', locationData.coords.latitude, locationData.coords.longitude).subscribe(),
          this.router.navigate(['/search']);
        }
      );
    }
  }
}
