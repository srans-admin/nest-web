import { Component, OnInit } from '@angular/core';
import { Role } from '../../_models/Role';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../_services/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  id: number;
  role: Role;

  constructor(private route: ActivatedRoute,private router: Router,
    private roleService: RoleService) { }

  ngOnInit() {
    this.role = new Role();

    this.id = this.route.snapshot.params['id'];

    this.roleService.getRole(this.id)
      .subscribe(data => {
        console.log(data)
        this.role = data;
      }, error => console.log(error));
  }

  updateRole() {
    this.roleService.updateRole(this.id, this.role)
      .subscribe(data => console.log(data), error => console.log(error));
    this.role = new Role();
    this.gotoList();
  }

  onSubmit() {
    this.updateRole();
  }

  gotoList() {
    this.router.navigate(['/roles']);
  }
}

