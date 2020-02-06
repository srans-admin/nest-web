import { Component, OnInit, Inject } from '@angular/core';
import { RoomService } from '../../_services/room.service';
import { Room } from '../../_models/room';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/_models/hostel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bed } from 'src/app/_models/bed';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  private tmpRoom: Room = new Room();
  private hostel: Hostel;
  private room: Room = new Room();
  private floorName: string;
  private submitted = false;
  private rooms: Array<Room> = [];
  private numOfRooms: number = 1; 
  private roomRent: number;
  private roomNumbers : string = "";
  private roomType: string = "Single";
  private bedNo: string;
  private position: string = "Left";
  private bedAlloted: string = "Alloted";
  private bed : Array<Room> = [];
  
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
      this.errorMsg = "Room Numbers count not matched";
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
        break;
      }
      case "Double": {
        numOfBeds = 2;
        break;
      }
      case "Triple": {
        numOfBeds = 3;
        break;
      }
      case "Misc": {
        numOfBeds = 3;
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
