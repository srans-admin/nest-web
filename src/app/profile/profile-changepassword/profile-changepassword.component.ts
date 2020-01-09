import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../_services/user.service';
import { OldPwdValidators } from './old-pwd.validators';

@Component({
  selector: 'app-profile-changepassword',
  templateUrl: './profile-changepassword.component.html',
  styleUrls: ['./profile-changepassword.component.css']
})
export class ProfileChangepasswordComponent implements OnInit {

  form1: FormGroup;
  constructor(private userService: UserService,
              fb: FormBuilder,
              public dialogRef: MatDialogRef<ProfileChangepasswordComponent>) { 
                this.form1 = fb.group({
                  'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
                  'newPwd': ['',Validators.required],
                  'confirmPwd': ['',Validators.required]
                }, {
                  validator: OldPwdValidators.matchPwds
                });
              }

  get oldPwd(){
    return this.form1.get('oldPwd');
  }

    get newPwd(){
    return this.form1.get('newPwd');
  }

    get confirmPwd(){
    return this.form1.get('confirmPwd');
  }

  // submitted = false;

  ngOnInit() {
  }

  // save() {
  //   this.userService.createCategory(this.category)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.category = new Category();
  //   this.gotoList();
  // }

  // onSubmit() {
  //   this.dialogRef.close();
  //   this.submitted = true;
  //   // this.save();
  // }

}
