// import { CallbackComponent } from './components-lgt/callback/callback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { HomeComponent } from './components/top-navbar/navbar-fixed/line1/home/home.component';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },  // redirect is applied only once; redirect from x to y, and from y to z is not aplied
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // here are no / slash-es, the order matters, first match applied
    { path: '**', redirectTo: 'offers', pathMatch: 'full' } //,
    // { path: 'callback', component: CallbackComponent }   //  callback match the URL from auth0 dashboard site
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true, // using Hash-based Urls          .../#/welcome
    scrollPositionRestoration: 'enabled'  // open new component view on top
  }  
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
