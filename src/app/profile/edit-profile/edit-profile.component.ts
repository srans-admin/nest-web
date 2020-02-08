import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../_auth/auth.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  //private id: number;
  //private user: User;
  profileForm: FormGroup; 
  private currentUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    //this.user = new User();
    this.currentUser = this.authenticationService.currentUser;
  
    //this.id = this.route.snapshot.params['id'];
    // this.userService.getUser(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.user = data;
    //   }, error => console.log(error));

  }

  editProfile() {
    this.userService.editProfile(this.currentUser)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.gotoList();
  }

  cancelProfile(){
    this.router.navigate(['/profile']);
  }

  onSubmit() {
    this.editProfile();
  }

  gotoList() {
    this.router.navigate(['/profile']);
  }

}