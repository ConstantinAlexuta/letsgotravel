import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneIconComponent } from './icons/phone-icon/phone-icon.component';
import { PhoneIconAndTextComponent } from './icons/phone-icon-and-text/phone-icon-and-text.component';
import { EmailIconComponent } from './icons/email-icon/email-icon.component';
import { EmailIconAndTextComponent } from './icons/email-icon-and-text/email-icon-and-text.component';
import { WhatsappIconComponent } from './icons/whatsapp-icon/whatsapp-icon.component';
import { WhatsappIconAndTextComponent } from './icons/whatsapp-icon-and-text/whatsapp-icon-and-text.component';
import { FacebookIconComponent } from './icons/facebook-icon/facebook-icon.component';
import { FacebookIconAndTextComponent } from './icons/facebook-icon-and-text/facebook-icon-and-text.component';
import { InstagramIconComponent } from './icons/instagram-icon/instagram-icon.component';
import { InstagramIconAndTextComponent } from './icons/instagram-icon-and-text/instagram-icon-and-text.component';
import { MapIconComponent } from './icons/map-icon/map-icon.component';
import { MapIconAndTextComponent } from './icons/map-icon-and-text/map-icon-and-text.component';

import { IconsAllShortOnlyIconsComponent } from './icons-all-short-only-icons/icons-all-short-only-icons.component';
import { IconsAllLargeIconsAndTextComponent } from './icons-all-large-icons-and-text/icons-all-large-icons-and-text.component';
import { IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from './icons-large-icons-and-text-phone-and-email-others-short-only-icons/icons-large-icons-and-text-phone-and-email-others-short-only-icons.component';
import { IconsShortcutAllWithoutPhoneAndEmailComponent } from './icons-shortcut-all-without-phone-and-email/icons-shortcut-all-without-phone-and-email.component';
import { IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent } from './icons-large-icons-and-text-all-without-phone-and-email/icons-large-icons-and-text-all-without-phone-and-email.component';
import { IconsShortOnlyIconsOnlyPhoneAndEmailComponent } from './icons-short-only-icons-only-phone-and-email/icons-short-only-icons-only-phone-and-email.component';
import { IconsLargeIconsAndTextOnlyPhoneAndEmailComponent } from './icons-large-icons-and-text-only-phone-and-email/icons-large-icons-and-text-only-phone-and-email.component';
import { IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from './icons-and-text-phone-and-email-others-short-only-icons/icons-and-text-phone-and-email-others-short-only-icons.component';

import { IconsModule } from './icons/icons.module';
import { IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent } from './icons-splited-for-mobile-menu-phone-and-email-text-others-icons/icons-splited-for-mobile-menu-phone-and-email-text-others-icons.component';
import { IconsAllShortOnlyIconsMobileComponent } from './icons-all-short-only-icons-mobile/icons-all-short-only-icons-mobile.component';

@NgModule({
  declarations: [
    IconsAllShortOnlyIconsComponent, 
    IconsAllLargeIconsAndTextComponent, 
    IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent, 
    IconsShortcutAllWithoutPhoneAndEmailComponent, 
    IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent, 
    IconsShortOnlyIconsOnlyPhoneAndEmailComponent, 
    IconsLargeIconsAndTextOnlyPhoneAndEmailComponent, 
    IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent, IconsSplitedForMobileMenuPhoneAndEmailTextOthersIconsComponent, IconsAllShortOnlyIconsMobileComponent
  ],
  imports: [
    CommonModule,
    IconsModule
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
    MapIconAndTextComponent,

    IconsAllShortOnlyIconsComponent, 
    IconsAllLargeIconsAndTextComponent, 
    IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent, 
    IconsShortcutAllWithoutPhoneAndEmailComponent, 
    IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent, 
    IconsShortOnlyIconsOnlyPhoneAndEmailComponent, 
    IconsLargeIconsAndTextOnlyPhoneAndEmailComponent, 
    IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent
  ]
})
export class IconsAssociatedModule { }
