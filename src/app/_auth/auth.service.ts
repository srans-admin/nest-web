import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { User } from '../_models/user'; 
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>; 

    private userName = '';
    private password = '';

    private clientId = environment.clientId;
    private clientSecret = environment.clientSecret;
    private uaaURL = environment.uaaURL;

    private currentLoginSubject: BehaviorSubject<Boolean>;
    public currentLogin: Observable<Boolean>;

    constructor(private _http: HttpClient, 
        private cookieService: CookieService
        ) {  
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User { 
        return  this.currentUserSubject.value;
    }
 
    //TODO Need to remove localStorage completely and use only cookieService from angular
    login(userName, password) { 

        this.userName = userName;
        this.password = password;

        let params = new URLSearchParams();
        params.append('grant_type','password');
        params.append('username', userName);
        params.append('password', password); 
        
        let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
         'Authorization': 'Basic '+btoa(this.clientId+":"+this.clientSecret)});
        
        return this._http.post(this.uaaURL,  encodeURI(params.toString()), { headers: headers });
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.cookieService.delete('access_token'); 
        this.cookieService.delete('userinfo'); 
        this.currentUserSubject.next(null);
    } 

    setAccessToken(tokenInfo){  
        localStorage.setItem('currentUser', JSON.stringify(tokenInfo)); 
        console.log('Got access token : '+tokenInfo);
        this.currentUserSubject.next( tokenInfo );

        var expireDate = new Date().getTime() + (1000 * tokenInfo.expires_in);
        this.cookieService.set("access_token", tokenInfo.access_token, expireDate);  
    } 


    saveUserDetails(user){
        this.cookieService.set('userinfo', JSON.stringify(user) );
    }

    getLoggedInUserDetails() : User {
        return JSON.parse(this.cookieService.get('userinfo'))
    } 

    getHttpHeaders()  {
        let  headers = new HttpHeaders(
            {
                'Content-type': 'application/json; charset=utf-8', 
                'Authorization': 'Bearer '+this.cookieService.get('access_token')
            });
            
        return { headers: headers }; 
      } 

      getHttpOnlyHeaders()  {
        let  headers = new HttpHeaders(
            { 
                'Authorization': 'Bearer '+this.cookieService.get('access_token')
            });
            
        return headers; 
      } 

    public get isUserLoggedIn(): Boolean {
      return  this.currentLoginSubject.value;
    }
}