import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public userService: UserService) { }


  showUserDetails(){
    return this.userService.userData && this.authService.authInfo && this.authService.authInfo.accessToken;
  }
  ngOnInit() {}

}
