import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarLeftComponent } from './side-bar-left.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { Line1Component } from './line1/line1.component';
import { Line2Component } from './line2/line2.component';
import { Line3Component } from './line3/line3.component';
import { Line4Component } from './line4/line4.component';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [SideBarLeftComponent, LogoComponent, SearchComponent, Line1Component, Line2Component, Line3Component, Line4Component, SocialComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarLeftComponent
  ]
})
export class SideBarLeftModule { }
