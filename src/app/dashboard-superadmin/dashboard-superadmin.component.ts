import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard-component';

@Component({
  selector: 'app-dashboard-superadmin',
  templateUrl: './dashboard-superadmin.component.html',
  styleUrls: ['./dashboard-superadmin.component.css']
})
export class DashboardSuperadminComponent extends DashboardComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
