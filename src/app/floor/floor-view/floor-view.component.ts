import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Floor } from '../../_models/floor';
import { FloorService } from '../../_services/floor.service';

@Component({
  selector: 'app-floor-view',
  templateUrl: './floor-view.component.html',
  styleUrls: ['./floor-view.component.css']
})
export class FloorViewComponent implements OnInit {
  id : number;
  floor : Floor;

  constructor(private floorService:FloorService, 
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

  list(){
    this.router.navigate(['/floors']);
  }

}
