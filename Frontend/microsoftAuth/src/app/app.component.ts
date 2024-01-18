import { Component } from '@angular/core';
import { MicrosoftLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MicrosoftAuthService } from 'src/services/microsoft-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoftAuth';
  processing = false;

  constructor(
    private microsoftAuthService: MicrosoftAuthService,
    private socialAuthService: SocialAuthService,
  ) {}

  signInWithMicrosoft(): void {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID)
      .then(user => {
        console.log('user', user)
        this.microsoftAuthService
          .verifyMicrosoftToken({ access_token: user.authToken })
          .subscribe({
            error: (err) => {
              this.processing= false
              console.log(err);
            },
          });
      })
      .catch(err => {
        console.log('err', err)
      });
  }
}
