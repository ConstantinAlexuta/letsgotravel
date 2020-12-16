import { IconsAssociatedModule } from './../icons-associated/icons-associated.module';
import { RouterModule } from '@angular/router';
import { HomeCarouselBootstrapComponent } from './home-carousel-bootstrap/home-carousel-bootstrap.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeCarouselBootstrapModule } from './home-carousel-bootstrap/home-carousel-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HomeCardsModule } from './home-cards/home-cards.module';
import { LogoSmallComponent } from './logo-small/logo-small.component';
import { LogoLargeComponent } from './logo-large/logo-large.component';

import { IconsAllLargeIconsAndTextComponent } from '../icons-associated/icons-all-large-icons-and-text/icons-all-large-icons-and-text.component';
import { IconsAllShortOnlyIconsComponent } from '../icons-associated/icons-all-short-only-icons/icons-all-short-only-icons.component';
import { IconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from '../icons-associated/icons-and-text-phone-and-email-others-short-only-icons/icons-and-text-phone-and-email-others-short-only-icons.component';
import { IconsLargeIconsAndTextAllWithoutPhoneAndEmailComponent } from '../icons-associated/icons-large-icons-and-text-all-without-phone-and-email/icons-large-icons-and-text-all-without-phone-and-email.component';
import { IconsLargeIconsAndTextOnlyPhoneAndEmailComponent } from '../icons-associated/icons-large-icons-and-text-only-phone-and-email/icons-large-icons-and-text-only-phone-and-email.component';
import { IconsLargeIconsAndTextPhoneAndEmailOthersShortOnlyIconsComponent } from '../icons-associated/icons-large-icons-and-text-phone-and-email-others-short-only-icons/icons-large-icons-and-text-phone-and-email-others-short-only-icons.component';
import { IconsShortOnlyIconsOnlyPhoneAndEmailComponent } from '../icons-associated/icons-short-only-icons-only-phone-and-email/icons-short-only-icons-only-phone-and-email.component';
import { IconsShortcutAllWithoutPhoneAndEmailComponent } from '../icons-associated/icons-shortcut-all-without-phone-and-email/icons-shortcut-all-without-phone-and-email.component';
import { EmailIconAndTextComponent } from '../icons-associated/icons/email-icon-and-text/email-icon-and-text.component';
import { EmailIconComponent } from '../icons-associated/icons/email-icon/email-icon.component';
import { FacebookIconAndTextComponent } from '../icons-associated/icons/facebook-icon-and-text/facebook-icon-and-text.component';
import { FacebookIconComponent } from '../icons-associated/icons/facebook-icon/facebook-icon.component';
import { InstagramIconAndTextComponent } from '../icons-associated/icons/instagram-icon-and-text/instagram-icon-and-text.component';
import { InstagramIconComponent } from '../icons-associated/icons/instagram-icon/instagram-icon.component';
import { MapIconAndTextComponent } from '../icons-associated/icons/map-icon-and-text/map-icon-and-text.component';
import { MapIconComponent } from '../icons-associated/icons/map-icon/map-icon.component';
import { PhoneIconAndTextComponent } from '../icons-associated/icons/phone-icon-and-text/phone-icon-and-text.component';
import { PhoneIconComponent } from '../icons-associated/icons/phone-icon/phone-icon.component';
import { WhatsappIconAndTextComponent } from '../icons-associated/icons/whatsapp-icon-and-text/whatsapp-icon-and-text.component';
import { WhatsappIconComponent } from '../icons-associated/icons/whatsapp-icon/whatsapp-icon.component';

@NgModule({
  declarations: [
    LogoSmallComponent, 
    LogoLargeComponent,

    HomeMenuComponent, 
    HomeViewComponent    
  ],
  imports: [
    CommonModule,

    IconsAssociatedModule,

    HomeCardsModule,
    HomeCarouselBootstrapModule,

    RouterModule.forChild([
        { path: 'home-view', component: HomeViewComponent },
        { path: 'home-cards', component: HomeCardsComponent },
        { path: 'home-carousel-bootstrap', component: HomeCarouselBootstrapComponent }
  ])
  ],
  exports: [
    LogoSmallComponent, 
    LogoLargeComponent,

    HomeMenuComponent, 
    HomeViewComponent,
    
    HomeCardsComponent,
    HomeCarouselBootstrapComponent,

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
export class HomeModule { }
