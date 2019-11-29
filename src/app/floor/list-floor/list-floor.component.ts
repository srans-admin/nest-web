import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorService } from '../../floor.service'
import { Floor } from '../../floor';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';

@Component({
  selector: 'app-list-floor',
  templateUrl: './list-floor.component.html',
  styleUrls: ['./list-floor.component.css']
})
export class ListFloorComponent implements OnInit {
  floors: Observable<Floor[]>;
  hostels: Observable<Hostel[]>;

  @Input() hostel: Hostel;

  constructor(private floorService: FloorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.floors = this.floorService.getFloorsList();
  }
  
  deleteFloor(id: number) {
    this.floorService.deleteFloor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  floorDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateFloor(id: number){
    this.router.navigate(['update', id]);
  }

  getHostelId(id: number){
    this.router.navigate(['hostelId', id]);
  }

}
