import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';
import { SideBarRightModule } from './side-bar-right/side-bar-right.module';
import { SideBarLeftModule } from './side-bar-left/side-bar-left.module';
import { NavbarFixedModule } from './navbar-fixed/navbar-fixed.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { NavbarFixedComponent } from './navbar-fixed/navbar-fixed.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './navbar-fixed/navbar-fixed-line1/contact/contact.component';

@NgModule({
  declarations: [
      // SideBarLeftComponent,
      // NavbarFixedComponent,
      // SideBarRightComponent,
      // NavbarComponent
  ],
  imports: [
    CommonModule,
    SideBarLeftModule,
    NavbarFixedModule,
    SideBarRightModule,
    RouterModule.forChild([
        // { path: 'about-us', component: AboutUsComponent },
        // { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [
    NavbarComponent    
  ]  
})
export class TopNavbar1Module { }
