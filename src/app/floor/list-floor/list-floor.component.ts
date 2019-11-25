import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorService } from '../../floor.service'
import { Floor } from '../../floor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-floor',
  templateUrl: './list-floor.component.html',
  styleUrls: ['./list-floor.component.css']
})
export class ListFloorComponent implements OnInit {
  floors: Observable<Floor[]>;

  constructor(private floorService: FloorService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.floors = this.floorService.getFloorsList();
  }

}
