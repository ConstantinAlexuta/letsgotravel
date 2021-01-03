import { Router } from '@angular/router';
// import { AuthService } from './components-lgt/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lgt-ui';

  // constructor(
  //   private router: Router
  //   // private authService: AuthService
  //   ) {
  //   // authService.handleAuthentication();
  // }

  // logOut() {
  //   // do something
  //   this.router.navigate(['/home']);
  //   // this.router.navigate('/home');
  //   // this.router.navigateByUrl('/home');

  // }

}
