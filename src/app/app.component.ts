// import { AuthService } from './components-lgt/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lgt-ui';

  constructor(
    // private authService: AuthService
    ) {
    // authService.handleAuthentication();
  }

}
