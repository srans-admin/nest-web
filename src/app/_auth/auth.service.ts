import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../_models/user";
import { CookieService } from "ngx-cookie-service";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  private userName = "";
  private password = "";

  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  private uaaURL = environment.uaaURL;

  //private currentLoginSubject: BehaviorSubject<Boolean>;
  //public currentLogin: Observable<Boolean>;

  @Output()
  private currentUserEvent: EventEmitter<any> = new EventEmitter();
  //public currentUser: User = null;
  public currentUser: User =this.getLoggedInUserDetails();

  constructor(private _http: HttpClient, private cookieService: CookieService) {
    //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUserSubject = new BehaviorSubject<User>(null);
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  // change() {
  //     console.log('change started');
  //     this.fire.emit(true);
  // }

  getCurrentUserEmitorEvent() {
    return this.currentUserEvent;
  }

  public get currentUserValue(): User {
    return this.currentUser;
  }

  public get getUserDetails() {
    return this.cookieService.get("access_token") || null;
  }
  login(userName, password) {
    this.userName = userName;
    this.password = password;

    let params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("username", userName);
    params.append("password", password);

    let headers = new HttpHeaders({
      "Content-type": "application/x-www-form-urlencoded; charset=utf-8",
      Authorization: "Basic " + btoa(this.clientId + ":" + this.clientSecret)
    });

    return this._http.post(this.uaaURL, encodeURI(params.toString()), {
      headers: headers
    });
  }

  logout() {
    // remove user from local storage and set current user to null
    //localStorage.removeItem('currentUser');
    this.cookieService.delete("access_token");
    this.cookieService.delete("userinfo");
    //this.currentUserSubject.next(null);
    this.currentUser = null;
    this.currentUserEvent.emit(null);
  }

  

  setAccessToken(tokenInfo) {
    //localStorage.setItem('currentUser', JSON.stringify(tokenInfo));
    console.log("Got access token : " + tokenInfo);
    //this.currentUserSubject.next( tokenInfo );
    var expireDate = new Date().getTime() + 1000 * tokenInfo.expires_in;
    this.cookieService.set("access_token", tokenInfo.access_token, expireDate);
    localStorage.setItem('access_token', tokenInfo.access_token);
  }

  saveUserDetails(user) {
    //console.log('Got user : '+user);
    this.cookieService.set("userinfo", JSON.stringify(user));
    //this.currentUserSubject.next( this.getLoggedInUserDetails() );
    //this.currentUserSubject.next( user );
    console.log(user);

    this.currentUser = user;
    console.log("Triggered login event : " + user);
    this.currentUserEvent.emit(user);
    localStorage.setItem('userDetails', JSON.stringify(user));
  }

  getLoggedInUserDetails() : User {
      const userInfo = this.cookieService.get('userinfo');
      if(userInfo) {
          return JSON.parse(userInfo);
      } else {
          return null;
      }
  }

  getHttpHeaders() {
    let headers = new HttpHeaders({
      "Content-type": "application/json; charset=utf-8",
      Authorization: "Bearer " + this.cookieService.get("access_token")
    });

    return { headers: headers };
  }

  getHttpOnlyHeaders() {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.cookieService.get("access_token")
    });

    return headers;
  }
}
