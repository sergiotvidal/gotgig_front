import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { AsideComponent } from './aside/aside.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  declarations: [UserComponent, UserFormsComponent, AsideComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
