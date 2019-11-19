import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Role } from '../../role';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../role.service';
=======
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

<<<<<<< HEAD
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

=======
  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
