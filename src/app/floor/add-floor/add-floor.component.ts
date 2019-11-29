<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Floor } from '../../floor';
import { FloorService } from '../../floor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Observable } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css']
})
export class AddFloorComponent implements OnInit {
<<<<<<< HEAD
  hostels: Observable<Hostel[]>;
  @Input() hostel: Hostel;
  constructor(private floorService: FloorService, 
              private router: Router,
              private route: ActivatedRoute,
              private hostelService: HostelService) { }
   id: number; 
  //  hostel: Hostel = new Hostel();
  floor: Floor = new Floor();
  submitted = false;

  ngOnInit() {
    this.id = this.hostel.id;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.floorService.createFloor(this.floor, this.id)
      .subscribe(data => console.log(data), error => console.log(error));
    this.floor = new Floor();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/floors']);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

}
