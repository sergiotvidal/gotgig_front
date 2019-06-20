import { Component, OnInit } from '@angular/core';
import { SearchService } from './core/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) {}
  title = 'gotgigfront';

  public lat;
  public lng;

  public ngOnInit() {
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
      alert("Geolocation is not supported by this browser.");
    }
  }
}
