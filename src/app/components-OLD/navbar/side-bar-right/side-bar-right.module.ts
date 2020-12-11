import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarRightComponent } from './side-bar-right.component';
import { Line1Component } from './line1/line1.component';
import { Line2Component } from './line2/line2.component';
import { Line3Component } from './line3/line3.component';
import { Line4Component } from './line4/line4.component';
import { SocialComponent } from './social/social.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
      SideBarRightComponent,
      Line1Component,
      Line2Component,
      Line3Component,
      Line4Component,
      SocialComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarRightComponent
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SideBarRightModule { }
