import { Component, OnInit, Input, Output } from '@angular/core';
import { Floor } from '../../floor';
import { FloorService } from '../../floor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css']
})
export class AddFloorComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  @Output() hostel: Hostel;
  constructor(private floorService: FloorService, 
              private router: Router,
              private route: ActivatedRoute,
              private hostelService: HostelService) { }
  id: number; 
  // hostel: Hostel = new Hostel();
  floor: Floor = new Floor();
  submitted = false;

  ngOnInit() {
    this.id = this.hostel.id;
    console.log('archana'+ this.id);
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
  }

}
