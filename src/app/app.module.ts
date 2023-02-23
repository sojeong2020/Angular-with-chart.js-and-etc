import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FeatureModule } from './feature/feature.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { IndexComponent } from './mainfeature/public/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
