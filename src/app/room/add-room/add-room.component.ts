import { Component, OnInit, Inject } from '@angular/core';
import { RoomService } from '../../_services/room.service';
import { Room } from '../../_models/room';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/_models/hostel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bed } from 'src/app/_models/Bed';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  tmpRoom: Room = new Room();
  hostel: Hostel;
  room: Room = new Room();
  floorName: string;
  submitted = false;
  rooms: Array<Room> = [];
  numOfRooms: number = 1; 
  roomRent: number = 2000;
  roomNumbers : string = "";
  roomType: string = "Single";
  bedNo: string;
  position: string = "Left";
  bedAlloted: string = "Alloted";
  bed : Array<Room> = [];
  
  //Errors
  errorMsg:String="";

  constructor(private roomService: RoomService,
    private router: Router,
    public dialogRef: MatDialogRef<AddRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.hostel = data.hostel;
    this.floorName = data.floorName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    // this.roomService.postRoom(this.room)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.room = new Room();
    // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  addRoom() {
    this.rooms.push(this.tmpRoom);
  }

  addRoomToHostel() {
    let currRoomNumbers = this.roomNumbers.split(",");
    if (this.numOfRooms != currRoomNumbers.length) {
      this.errorMsg = "Room Numbers count not mached";
      return;
    }  

    for (let i = 0; i < currRoomNumbers.length; i++) {

      this.tmpRoom = new Room();
      this.tmpRoom.roomName = currRoomNumbers[i];
      this.tmpRoom.roomType = this.roomType;
      this.tmpRoom.roomRent = this.roomRent;
      this.addBedsToRoom(this.tmpRoom);
      this.tmpRoom.beds = this.tmpRoom.beds;
      // this.tmpRoom.position = this.position;
      // this.tmpRoom.bedAlloted = this.bedAlloted;
      this.hostel.addRoom(this.floorName, this.tmpRoom);
      console.log(' Room : ' + this.tmpRoom + ' added.');
    }

    this.dialogRef.close(); 
    
  }


  addBedsToRoom(room : Room){

    let numOfBeds;
    switch (room.roomType) {
      case "Single": {
        numOfBeds = 1;
        // room.roomRent = 13000;
        break;
      }
      case "Double": {
        numOfBeds = 2;
        // room.roomRent = 12000;
        break;
      }
      case "Triple": {
        numOfBeds = 3;
        // room.roomRent = 10000;
        break;
      }
      case "Misc": {
        numOfBeds = 3;
        // room.roomRent = 10000;
        break;
      }
      default: {
        console.log("Invalid Number of Beds");
        break;
      }
    }

    for (let i = 0; i < numOfBeds; i++) {
      let tmpBed = new Bed();
      tmpBed.bedNo = (i + 1);
      room.beds.push(tmpBed);
    }
    
  }

  close() {
    this.dialogRef.close();
  }

  gotoList() {
    this.router.navigate(['/roms']);
  }

}
