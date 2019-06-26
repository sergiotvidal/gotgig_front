import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { UserService } from '../../../core/services/user.service';
import { UserData, SearchData } from '../../../core/core.models';

@Component({
  selector: 'app-concerthalls',
  templateUrl: './concerthalls.component.html',
  styleUrls: ['./concerthalls.component.scss']
})
export class ConcerthallsComponent {

  constructor(public searchService: SearchService) { }

  relocateMapCenter(lat, lng) {
    this.searchService.search('', lat, lng).subscribe();
  }

  refresh() {
    window.location.reload();
  }

  getNextConcertByLocalId(localId){
    const concerts =  this.searchService.searchData.concertsData
          .filter(concert=> concert.id_localhall===localId);
    if (concerts.length > 0) {
      return concerts[0];
    }
  }

  getRemainingTimeByLocalId(localId){
    const currentTime = new Date();
    const nextConcert = this.getNextConcertByLocalId(localId);
    if (!nextConcert){
      return 'No hay conciertos programados';
    }
    const concertDatetime = new Date(nextConcert.date);
    const timeDiff = concertDatetime.getTime() - currentTime.getTime();

    if (timeDiff <= 86400000) {
      return '¡Hoy hay concierto!'
    }

    const timeInDays = timeDiff / 86400000

    return `Próximo concierto en ${Math.floor(timeInDays)} días`

  }

}
