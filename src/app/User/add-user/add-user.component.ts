import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {UserService} from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 
  constructor(public dialogbox: MatDialogRef<AddUserComponent>,
    private service:UserService) { }

  ngOnInit() {
this.resetForm();    
  }

  resetForm(form?:NgForm){
    if(form=null)
    form.resetForm();

    this.service.formData ={
      UserID:0,
      Name:'',
      emailID:'',
      DOB:'',
      PhoneNumber:''
    }
  }

  onClose(){
    this.dialogbox.close();
  }

  onSubmit(form:NgForm){
  console.log(form.value);
  }
  

}
