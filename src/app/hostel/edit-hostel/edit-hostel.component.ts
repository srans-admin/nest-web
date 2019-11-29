import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-edit-hostel',
  templateUrl: './edit-hostel.component.html',
  styleUrls: ['./edit-hostel.component.css']
})
export class EditHostelComponent implements OnInit {
<<<<<<< HEAD
  id : number;
  hostel : Hostel;

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

  putHostel() {
    this.hostelService.putHostel(this.id, this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }

  onSubmit() {
    this.putHostel();    
  }

  gotoList() {
    this.router.navigate(['/hostels']);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

}
