import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Floor } from '../../_models/Floor';
import { FloorService } from '../../_services/floor.service';

@Component({
  selector: 'app-edit-floor',
  templateUrl: './edit-floor.component.html',
  styleUrls: ['./edit-floor.component.css']
})
export class EditFloorComponent implements OnInit {
  id : number;
  floor : Floor;

  constructor(private floorService: FloorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.floor = new Floor();

    this.id = this.route.snapshot.params['id'];
    
    this.floorService.getFloor(this.id)
      .subscribe(data => {
        console.log(data)
        this.floor = data;
      }, error => console.log(error));
  }
  
  putFloor() {
    this.floorService.putFloor(this.id, this.floor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.floor = new Floor();
    this.gotoList();
  }

  onSubmit() {
    this.putFloor();    
  }

  gotoList() {
    this.router.navigate(['/floors']);
  }

}
