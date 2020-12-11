import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavbarModule } from './components/top-navbar/top-navbar.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    TopNavbarModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
