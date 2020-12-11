import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/user/login/login.component';

import { NavbarFixedComponent } from './components/navbar/navbar-fixed/navbar-fixed.component';
import { SideBarLeftComponent } from './components/navbar/side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './components/navbar/side-bar-right/side-bar-right.component';
import { NavbarFixedLineAdminComponent } from './components/navbar/navbar-fixed/navbar-fixed-line-admin/navbar-fixed-line-admin.component';
import { NavbarFixedLineSuperAdminComponent } from './components/navbar/navbar-fixed/navbar-fixed-line-super-admin/navbar-fixed-line-super-admin.component';
import { NavbarFixedLine1Component } from './components/navbar/navbar-fixed/navbar-fixed-line1/navbar-fixed-line1.component';
import { NavbarFixedLine2Component } from './components/navbar/navbar-fixed/navbar-fixed-line2/navbar-fixed-line2.component';
import { NavbarFixedLine3Component } from './components/navbar/navbar-fixed/navbar-fixed-line3/navbar-fixed-line3.component';
import { NavbarFixedLogoComponent } from './components/navbar/navbar-fixed/navbar-fixed-logo/navbar-fixed-logo.component';
import { ContactComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/contact/contact.component';
import { Dropdown1Component } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/dropdown1.component';
import { OffersComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/offers/offers.component';
import { AboutUsComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/about-us/about-us.component';
import { FrameworkContractComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/dropdown1/terms-and-conditions/terms-and-conditions.component';


import { LogoComponent, MDBBootstrapModule } from 'angular-bootstrap-md';
import { SearchComponent } from './components/navbar/side-bar-left/search/search.component';
import { Line1Component } from './components/navbar/side-bar-right/line1/line1.component';
import { Line2Component } from './components/navbar/side-bar-right/line2/line2.component';
import { Line3Component } from './components/navbar/side-bar-right/line3/line3.component';
import { Line4Component } from './components/navbar/side-bar-right/line4/line4.component';
import { SocialComponent } from './components/navbar/side-bar-right/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TopbarComponent,
    CardsComponent,
    CarouselComponent,
    PageNotFoundComponent,
    LoginComponent,

    NavbarFixedComponent,
        NavbarFixedLogoComponent,
        NavbarFixedLine1Component,
            HomeComponent, 
            OffersComponent, 
            Dropdown1Component,
                AboutUsComponent,
                FrameworkContractComponent,
                PrivacyPolicyComponent,
                ReliableCompanyComponent,
                TermsAndConditionsComponent,
            ContactComponent,
        NavbarFixedLine2Component,
        NavbarFixedLine3Component,
        NavbarFixedLineAdminComponent,
        NavbarFixedLineSuperAdminComponent,
    SideBarLeftComponent,
        Line1Component,
        Line2Component,
        Line3Component,
        Line4Component,
        SocialComponent,
        // LogoComponent,      // conflict  cu MDB
        SearchComponent,
    SideBarRightComponent,
        Line1Component,     // conflict
        Line2Component,
        Line3Component,
        Line4Component,
        SocialComponent
  ],
  imports: [
    // NavbarModule,
    // NavbarFixedModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
