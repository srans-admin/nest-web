import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorService } from '../../_services/floor.service'
import { Floor } from '../../_models/floor';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../_models/hostel';
import { HostelService } from '../../_services/hostel.service';

@Component({
  selector: 'app-list-floor',
  templateUrl: './list-floor.component.html',
  styleUrls: ['./list-floor.component.css']
})
export class ListFloorComponent implements OnInit {
  // [x: string]: any;
  floors: Observable<Floor[]>;
  hostels: Observable<Hostel[]>;
  @Input() flrId: number;
  
  id : number;
  hostel : Hostel;  

  constructor(private floorService: FloorService,
              private hostelService: HostelService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.hostel = new Hostel();
    this.id = this.route.snapshot.params['id'];    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;
      }, error => console.log(error));

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

  addFloor(id: number){
    this.router.navigate(['createFloor', id]);
  }

}
