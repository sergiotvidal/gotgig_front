import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
// import { AppInitializerModule } from './app-initializer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AppInitializerModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
