import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {  
  
  constructor(private hostelService: HostelService, private router: Router) { }
  
  hostel: Hostel = new Hostel();
  submitted = false;

  ngOnInit() {
  }  

  newHostel(): void {
    this.submitted = false;
    this.hostel = new Hostel();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.hostelService.createHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }  

  gotoList() {
    this.router.navigate(['/hostels']);
  }
  
}
