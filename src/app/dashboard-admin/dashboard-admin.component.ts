import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  displayTenants(){
    this.router.navigate(['/user/tenant']);
  }

  displayGuests(){
    this.router.navigate(['/user/guest']);
  }

}
