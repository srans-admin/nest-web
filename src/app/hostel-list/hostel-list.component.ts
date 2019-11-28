 import { HostelDetailsComponent } from './../hostel-details/hostel-details.component';
import { Observable } from "rxjs";
import { HostelService } from "./../hostel.service";
import { Hostel } from "./../hostel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-hostel-list",
  templateUrl: "./hostel-list.component.html",
  styleUrls: ["./hostel-list.component.css"]
})
export class HostelListComponent implements OnInit {
  hostels: Observable<Hostel[]>;

  constructor(private hostelService: HostelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.hostels = this.hostelService.getHostelsList();
  }

  deleteHostel(id: number) {
    this.hostelService.deleteHostel(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  hostelDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateHostel(id: number){
    this.router.navigate(['update', id]);
  }
}
