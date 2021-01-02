// import { CallbackComponent } from './components-lgt/callback/callback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { HomeComponent } from './components/top-navbar/navbar-fixed/line1/home/home.component';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'offers', pathMatch: 'full' } //,
    // { path: 'callback', component: CallbackComponent }   //  callback match the URL from auth0 dashboard site
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {    scrollPositionRestoration: 'enabled'  }  // open new component view on top
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
