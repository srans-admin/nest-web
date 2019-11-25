import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../hostel.service";
import { Hostel } from "../../hostel";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.css']
})
export class ListHostelComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  
  constructor(private hostelService: HostelService,
    private router: Router) { }

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
