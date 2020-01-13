import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '.././_models/user';
import { UserService } from '.././_services/user.service';
import { AuthenticationService } from '.././_auth/auth.service';

@Component({
  selector: 'app-vacate',
  templateUrl: './vacate.component.html',
  styleUrls: ['./vacate.component.css']
})
export class VacateComponent implements OnInit {

  private currentUser: User;

  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) { 

                this.currentUser = this.authenticationService.currentUser;
                
              }

  ngOnInit() {
  }

}
