import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, BehaviorSubject } from 'rxjs';
import { UrlConstants } from 'src/shared/config/url.constants';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftAuthService {
  signIn(PROVIDER_ID: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private httpClient: HttpClient,
    private urlConstants: UrlConstants,
    ) { }
  currentUser$ = new BehaviorSubject<any>(null);

  
  verifyMicrosoftToken(data: any) {
    const apiUrl = this.urlConstants.baseURL + this.urlConstants.microsoftTokenVerify;

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.httpClient.post<Response>(apiUrl, data, { headers }).pipe(map(
      (response: any) => {
        return response
      }));
  }
  
}
