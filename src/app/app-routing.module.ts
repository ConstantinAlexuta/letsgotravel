import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { HomeComponent } from './components/top-navbar/navbar-fixed/line1/home/home.component';

const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
