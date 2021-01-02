// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// // import 'rxjs/add/operator/filter';
// import { filter } from 'rxjs/operators';

// import * as auth0 from 'auth0-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   auth0 = new auth0.WebAuth({
//     clientID: 'QLY8fN8yNVZd853IFN6SVbft1BBS0z4N',  // YOUR_CLIENT_ID
//     domain: 'constantinalexuta.eu.auth0.com',       // YOUR_DOMAIN
//     responseType: 'token id_token',
//     audience: 'http://localhost:8080/',
//     redirectUri: 'http://localhost:4200/callback',
//     scope: 'openid manager:offer-purchased manager:offers-purchased'
//   });

//   constructor(public router: Router) {}

//   public login(): void {
//     this.auth0.authorize();
//   }

//   public handleAuthentication(): void {
//     this.auth0.parseHash((err, authResult) => {
//       if (authResult && authResult.accessToken && authResult.idToken) {
//         window.location.hash = '';
//         this.setSession(authResult);
//         this.router.navigate(['/contact']);
//       } else if (err) {
//         this.router.navigate(['/contact']);
//         console.log(err);
//       }
//     });
//   }

//   //localStorage is of the browser
//   private setSession(authResult: any): void {
//     // Set the time that the access token will expire at
//     const expiresAt = JSON.stringify((authResult.expiresIn! * 1000) + new Date().getTime());
//     localStorage.setItem('access_token', authResult.accessToken!);
//     localStorage.setItem('id_token', authResult.idToken!);
//     localStorage.setItem('expires_at', expiresAt);
//   }

//   public logout(): void {
//     // Remove tokens and expiry time from localStorage
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('expires_at');
//     // Go back to the home route
//     this.router.navigate(['/']);
//   }

//   public isAuthenticated(): boolean {
//     // Check whether the current time is past the
//     // access token's expiry time
//     const expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
//     return new Date().getTime() < expiresAt;
//   }

// }
