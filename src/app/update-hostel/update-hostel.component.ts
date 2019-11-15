import { Component, OnInit } from '@angular/core';
import { Hostel } from '../hostel';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from '../hostel.service';

@Component({
  selector: 'app-update-hostel',
  templateUrl: './update-hostel.component.html',
  styleUrls: ['./update-hostel.component.css']
})
export class UpdateHostelComponent implements OnInit {

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

  updateHostel() {
    this.hostelService.updateHostel(this.id, this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }

  onSubmit() {
    this.updateHostel();    
  }

  gotoList() {
    this.router.navigate(['/hostels']);
  }
}
