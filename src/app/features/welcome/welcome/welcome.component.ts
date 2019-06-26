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
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.searchService.search('', position.coords.latitude, position.coords.longitude).subscribe(),
          this.router.navigate(['/search']);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
