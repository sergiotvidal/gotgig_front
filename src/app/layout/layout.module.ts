import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent, ModalComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ModalComponent, FooterComponent
  ]
})
export class LayoutModule { }
