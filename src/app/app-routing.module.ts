import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/welcome/welcome.module').then(mod => mod.WelcomeModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'register',
        loadChildren: () => import('./features/register/register.module').then(mod => mod.RegisterModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./features/search/search.module').then(mod => mod.SearchModule)
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/user/user.module').then(mod => mod.UserModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
