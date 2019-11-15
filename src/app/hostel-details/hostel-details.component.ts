import { Hostel } from '../hostel';
import { Component, OnInit, Input } from '@angular/core';
import { HostelService } from '../hostel.service';
import { HostelListComponent } from '../hostel-list/hostel-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.css']
})
export class HostelDetailsComponent implements OnInit {

  id: number;
  hostel: Hostel;

  constructor(private route: ActivatedRoute,private router: Router,
    private hostelService: HostelService) { }

  ngOnInit() {
    this.hostel = new Hostel();

    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['hostels']);
  }
}
