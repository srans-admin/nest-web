import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../hostel.service";
import { Hostel } from "../../hostel";
import { Router, ActivatedRoute } from '@angular/router';
import { ServerConfig } from '../../config/server.config';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../room';
import { Floor } from 'src/app/floor';

@Component({
  selector: 'floor-view',
  templateUrl: './floor.view.component.html',
  styleUrls: ['./floor.view.component.css']
})
export class FloorViewComponent implements OnInit {
    
  //@Input()
  hostel : Hostel;

  totalRooms = 0;
   
  
  constructor(private hostelService: HostelService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

    ngOnInit() {

      
     
      //TODO : get this information either from db or Ingection as @Input() from callable component
      //Its hardcoded for display 
      this.hostel = new Hostel();
      this.hostel.floors = [];
      let floor: Floor = new Floor();
      floor.id = 1;
      floor.floorName = "F-1";

      floor.rooms = [];
      let room : Room = new Room();
      room.id = 1;
      room.roomName="R-100";
      room.roomType='Single';
      floor.rooms.push(room);

      room = new Room();
      room.id = 1;
      room.roomName="R-100";
      room.roomType='Double';
      floor.rooms.push(room);

      room   = new Room();
      room.id = 3;
      room.roomName="R-100";
      room.roomType='Triple';
      floor.rooms.push(room);

      room   = new Room();
      room.id = 4;
      room.roomName="R-100";
      room.roomType='Misc';
      floor.rooms.push(room);
      this.hostel.floors.push(floor);
    }
   

    getRoomsWithType(floor: Floor, type: String): Array<Room>{
      let rooms : Array<Room> = [];
  
      this.totalRooms = floor.rooms.length;
  
      //TODO : Need to use map method here
      for( let i=0; i < floor.rooms.length ; i++){ 
        if(floor.rooms[i].roomType == type){
          rooms.push(floor.rooms[i]);
        } 
      }  
      return rooms;
  
    }

  }
  

  