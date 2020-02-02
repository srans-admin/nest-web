import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard-component';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent extends DashboardComponent implements OnInit {
 
  constructor( private router: Router ) { 
    super();
  }

  ngOnInit() {
  }


  displayTenants(){
    this.router.navigate(['/user/TENANT']);
  }

  displayGuests(){
    this.router.navigate(['/user/guest']);
  }

  

}
