import { HostelService } from '../hostel.service';
import { Hostel } from '../hostel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hostel',
  templateUrl: './create-hostel.component.html',
  styleUrls: ['./create-hostel.component.css']
})
export class CreateHostelComponent implements OnInit { 

  constructor(private hostelService: HostelService,
    private router: Router) { }

  hostel: Hostel = new Hostel();
  submitted = false;


  ngOnInit() {
  }

  newHostel(): void {
    this.submitted = false;
    this.hostel = new Hostel();
  }

  save() {
    this.hostelService.createHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/hostels']);
  }
}
