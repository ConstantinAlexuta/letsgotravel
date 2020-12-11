// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ContactComponent } from './components/navbar/navbar-fixed/navbar-fixed-line1/contact/contact.component';

const routes: Routes = [
    // { path: 'contact', component: ContactComponent },
//     { path: 'home', component: HomeComponent },
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
