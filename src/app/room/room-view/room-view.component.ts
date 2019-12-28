import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../../_services/room.service';
import { Room } from '../../_models/Room';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit { 

  @Input()
  room : Room;

  constructor(private roomService: RoomService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() { 
  }

  list(){
    this.room.roomType
  }

}
