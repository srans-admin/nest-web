import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';

 

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private currentUser: Observable<User>;
    private isLoggedIn : boolean = false;

    private userName = '';
    private password = '';

    private clientId = 'foo';
    private clientSecret = 'bar';
    private uaaURL = "http://localhost:9090/uaa-server/oauth/token";

    private currentLoginSubject: BehaviorSubject<Boolean>;
    public currentLogin: Observable<Boolean>;

    constructor(private _http: HttpClient,
        private userService: UserService) { 
         
        //this.currentLoginSubject = new BehaviorSubject<boolean>(false);
        //this.currentLogin = this.currentLoginSubject.asObservable();

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser1')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        
        return  this.currentUserSubject.value;
    }

    //{config.apiUrl}/users/authenticate
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
        this.isLoggedIn = false;
        this.currentUserSubject.next(null);
    }

  

    setAccessToken(tokenInfo){
        //this.isLoggedIn = true;
        //localStorage.setItem('accessToken', tokenInfo);
        //localStorage.setItem('currentUser', tokenInfo);

        //this.currentLoginSubject.next(true);
        //this.currentUserSubject.next(new User());

        localStorage.setItem('currentUser', JSON.stringify(tokenInfo));
        this.currentUserSubject.next(tokenInfo);

        this.userService.getUserDetails(this.userName).subscribe(
            data => { 
                localStorage.setItem('userinfo', data); 
            },
            error => { 
                alert('Unable to get User Info : '+error.error.error_description); 
            });  
    } 

    getLoggedInUserDetails(){
        return localStorage.getItem('userinfo'); 
    }

     

    // isUserLoggedIn(){
    //     return  this.currentLoginSubject.value; 
    // }

    public get isUserLoggedIn(): Boolean {
      return  this.currentLoginSubject.value;
    }
}