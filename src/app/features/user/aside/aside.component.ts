import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';
import {  Input } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { url } from 'inspector';


class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input() imageUrl: string = this.userService.userData.organizationData[0].avatar ;
    selectedFile: ImageSnippet;
    currentFileUpload: File

  constructor(public authService: AuthService, public userService: UserService) { }

  private onSuccess(response: any) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.refresh();
    interval(1000)
      .pipe(take(5))
      .subscribe(() => (this.selectedFile = null));
  }

  refresh() {
    window.location.reload();
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }


  ngOnInit() {
    if (this.userService.userData.organizationData[0].avatar === null) {
      this.imageUrl = '../../../../assets/default-user.jpg';
    }
  }


  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.userService
        .addAvatar(this.selectedFile.file)
        .subscribe(response => this.onSuccess(response), () => this.onError());
    });

    reader.readAsDataURL(file);
  }


}
