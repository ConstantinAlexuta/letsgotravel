import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneIconComponent } from './phone-icon/phone-icon.component';
import { PhoneIconAndTextComponent } from './phone-icon-and-text/phone-icon-and-text.component';
import { EmailIconComponent } from './email-icon/email-icon.component';
import { EmailIconAndTextComponent } from './email-icon-and-text/email-icon-and-text.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { WhatsappIconAndTextComponent } from './whatsapp-icon-and-text/whatsapp-icon-and-text.component';
import { FacebookIconComponent } from './facebook-icon/facebook-icon.component';
import { FacebookIconAndTextComponent } from './facebook-icon-and-text/facebook-icon-and-text.component';
import { InstagramIconComponent } from './instagram-icon/instagram-icon.component';
import { InstagramIconAndTextComponent } from './instagram-icon-and-text/instagram-icon-and-text.component';
import { MapIconComponent } from './map-icon/map-icon.component';
import { MapIconAndTextComponent } from './map-icon-and-text/map-icon-and-text.component';

@NgModule({
  declarations: [
    PhoneIconComponent, 
    PhoneIconAndTextComponent, 
    EmailIconComponent, 
    EmailIconAndTextComponent, 
    WhatsappIconComponent, 
    WhatsappIconAndTextComponent, 
    FacebookIconComponent, 
    FacebookIconAndTextComponent, 
    InstagramIconComponent, 
    InstagramIconAndTextComponent, 
    MapIconComponent, 
    MapIconAndTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneIconComponent, 
    PhoneIconAndTextComponent, 
    EmailIconComponent, 
    EmailIconAndTextComponent, 
    WhatsappIconComponent, 
    WhatsappIconAndTextComponent, 
    FacebookIconComponent, 
    FacebookIconAndTextComponent, 
    InstagramIconComponent, 
    InstagramIconAndTextComponent, 
    MapIconComponent, 
    MapIconAndTextComponent
  ]
})
export class IconsModule { }
