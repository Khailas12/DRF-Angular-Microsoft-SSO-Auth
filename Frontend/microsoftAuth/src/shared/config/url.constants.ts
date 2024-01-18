import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})

export class UrlConstants {
    baseURL = environment.baseUrl;

    microsoftTokenVerify = 'microsoft_token'
}