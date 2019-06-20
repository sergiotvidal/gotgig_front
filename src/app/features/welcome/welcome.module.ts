import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeFormsComponent } from './welcome-forms/welcome-forms.component';
import { WelcomeHeroComponent } from './welcome-hero/welcome-hero.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeSearchBarComponent } from './welcome-search-bar/welcome-search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormsComponent, WelcomeHeroComponent, WelcomeSearchBarComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class WelcomeModule { }
