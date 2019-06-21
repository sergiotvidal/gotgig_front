import { NgModule, APP_INITIALIZER } from '@angular/core';
import { UserService } from './core/services/user.service';

export function getInitialData(userService: UserService) {
  return () => {
    if (localStorage.getItem('auth')) {
      return new Promise(async resolve => {
        try {
          await userService.getUserData().toPromise();

          return resolve();
        } catch (error) {
          return resolve(error);
        }
      });
    }
    return Promise.resolve();
  };
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getInitialData,
      deps: [UserService],
      multi: true
    }
  ]
})
export class AppInitializerModule {}
