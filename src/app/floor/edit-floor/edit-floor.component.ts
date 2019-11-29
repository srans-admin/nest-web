import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Floor } from '../../floor';
import { FloorService } from '../../floor.service';
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-edit-floor',
  templateUrl: './edit-floor.component.html',
  styleUrls: ['./edit-floor.component.css']
})
export class EditFloorComponent implements OnInit {
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

}
