// import { HomeModule } from './components/home/home.module';
// import { TopNavbarMobileAndDesktopModule } from './components/top-navbar-mobile-and-desktop/top-navbar-mobile-and-desktop.module';
// import { FooterModule } from './components/footer/footer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { TopNavbarModule } from './components/top-navbar/top-navbar.module';
// import { SharedModule } from './components/shared/shared.module';

// import { ButtonModule } from 'primeng/button';
// import { TooltipModule } from 'primeng/tooltip';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { InputSwitchModule } from 'primeng/inputswitch';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components-lgt/page-not-found/page-not-found.component';
import { MenuHomeCarouselBootstrapComponent } from './components-lgt/menus/menu-home-carousel-bootstrap/menu-home-carousel-bootstrap.component';
import { MenuHomeCardsComponent } from './components-lgt/menus/menu-home-cards/menu-home-cards.component';
import { FooterModule } from './components-lgt/footer/footer.module';
import { TopLeftNavbarMobileAndDesktopModule } from './components-lgt/top-left-navbar-mobile-and-desktop/top-left-navbar-mobile-and-desktop.module';
// import { MenuHomeCarouselBootstrapComponent } from './components/menus/menu-home-carousel-bootstrap/menu-home-carousel-bootstrap.component';
// import { MenuHomeCardsComponent } from './components/menus/menu-home-cards/menu-home-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuHomeCarouselBootstrapComponent,
    MenuHomeCardsComponent,
    // PageNotFoundComponent,
    // MenuHomeCarouselBootstrapComponent,
    // MenuHomeCardsComponent
  ],
  imports: [
    // SharedModule,
    // TopNavbarModule,
    // FooterModule,
    // TopNavbarMobileAndDesktopModule,

    // HomeModule,

    FooterModule,    
    TopLeftNavbarMobileAndDesktopModule,





    FormsModule, ReactiveFormsModule, 
    // LocationStrategy, HashLocationStrategy,
    // ButtonModule, TooltipModule, RadioButtonModule, InputSwitchModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
