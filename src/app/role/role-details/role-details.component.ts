<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
import { Role } from '../../role';
import { Component, OnInit, Input } from '@angular/core';
import { RoleService } from '../../role.service';
import { RoleListComponent } from '../role-list/role-list.component';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
=======
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
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

  list(){
    this.router.navigate(['roles']);
  }
<<<<<<< HEAD
=======
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
}
