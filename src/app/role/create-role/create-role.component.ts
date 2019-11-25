import { RoleService } from '../../role.service';
import { Role } from '../../role';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
<<<<<<< HEAD
export class CreateRoleComponent implements OnInit {
=======
<<<<<<< HEAD
export class CreateRoleComponent implements OnInit {
=======
export class CreateRoleComponent implements OnInit { 
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64

  constructor(private roleService: RoleService,
    private router: Router) { }

<<<<<<< HEAD
      role: Role = new Role();
    submitted = false;
=======
  role: Role = new Role();
  submitted = false;
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64


  ngOnInit() {
  }

<<<<<<< HEAD
  newRole(): void {
=======
<<<<<<< HEAD
  newRole(): void {
=======
  newHostel(): void {
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
    this.submitted = false;
    this.role = new Role();
  }

  save() {
    this.roleService.createRole(this.role)
      .subscribe(data => console.log(data), error => console.log(error));
    this.role = new Role();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
<<<<<<< HEAD
    this.save();
=======
<<<<<<< HEAD
    this.save();
=======
    this.save();    
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
  }

  gotoList() {
    this.router.navigate(['/roles']);
  }
}
