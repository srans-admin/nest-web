
import { RoleDetailsComponent } from './../role-details/role-details.component';
import { Observable } from "rxjs";

// import { HostelDetailsComponent } from './../hostel-details/hostel-details.component';
// import { RoleService } from "./../role.service";

import { RoleService } from '../../role.service';
import { Role } from "../../role";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-role-list",
  templateUrl: "./role-list.component.html",
  styleUrls: ["./role-list.component.css"]
})
export class RoleListComponent implements OnInit {
  roles: Observable<Role[]>;


  constructor(private roleService: RoleService,
    private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roles = this.roleService.getRolesList();
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roleDetails(id: number){
<<<<<<< HEAD
=======

>>>>>>> f931fb3d30454cbf510d86baf9c17e93f26f1d78
    this.router.navigate(['rdetails', id]);
  }

  updateRole(id: number){
    this.router.navigate(['rupdate', id]);
  }
<<<<<<< HEAD
}
=======
  }



>>>>>>> f931fb3d30454cbf510d86baf9c17e93f26f1d78

