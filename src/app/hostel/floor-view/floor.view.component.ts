import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../_services/hostel.service";
import { Hostel } from "../../_models/hostel";
import { Router, ActivatedRoute } from '@angular/router';
import { ServerConfig } from '../../config/server.config';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../_models/room';

import { CreateUserComponent } from 'src/app/user/create-user/create-user.component';
import { Bed } from 'src/app/_models/Bed'; 
import { Floor } from '../../_models/floor';

@Component({
  selector: 'floor-view',
  templateUrl: './floor.view.component.html',
  styleUrls: ['./floor.view.component.css']
})
export class FloorViewComponent implements OnInit {
    
  @Input()
  hostel : Hostel;

  @Output() onSelectedBedInfoEmitor = new EventEmitter<any>(); 
  selectedBedInfo: object = {};

  totalRooms = 0; 
  
  constructor(private hostelService: HostelService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {
     
  }

    ngOnInit() { 
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

    //TODO Need to make sure we need to pass the info to the called : example: CreateUserComponent
     onSelectedBed(bed : object,  roomType, roomRent : number){
         
       this.selectedBedInfo = { 
        "roomRent": roomRent,
        "roomType": roomType,
        "bed": bed
      }  
      this.onSelectedBedInfoEmitor.emit(this.selectedBedInfo);
    } 

  }
  

  