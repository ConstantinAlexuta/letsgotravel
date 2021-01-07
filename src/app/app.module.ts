import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ButtonModule } from 'primeng/button';
// import { TooltipModule } from 'primeng/tooltip';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { InputSwitchModule } from 'primeng/inputswitch';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components-lgt/page-not-found/page-not-found.component';
import { TopLeftNavbarMobileAndDesktopModule } from './components-lgt/top-left-navbar-mobile-and-desktop/top-left-navbar-mobile-and-desktop.module';
import { TopLeftNavbarMobileAndDesktopCommonModule } from './components-lgt/top-left-navbar-mobile-and-desktop-common/top-left-navbar-mobile-and-desktop-common.module';
import { CallbackComponent } from './components-lgt/callback/callback.component';
// import { AuthService } from './components-lgt/auth/auth.service';
// import { AuthGuard } from './components-lgt/auth/auth.guard';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, CallbackComponent],
  imports: [
    // SharedModule,
    TopLeftNavbarMobileAndDesktopModule,
    TopLeftNavbarMobileAndDesktopCommonModule,

    FormsModule,
    ReactiveFormsModule,
    // LocationStrategy, HashLocationStrategy,
    // ButtonModule, TooltipModule, RadioButtonModule, InputSwitchModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    // AuthService, AuthGuard
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
