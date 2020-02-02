import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard-component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent  extends DashboardComponent  implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
