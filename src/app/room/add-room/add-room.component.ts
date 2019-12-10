import { Component, OnInit, Inject } from '@angular/core';
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router } from '@angular/router';
import { Hostel } from 'src/app/hostel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  roomNumbers : string = "";
  roomType: string = "Single";
  roomRent: number;
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
    this.roomService.postRoom(this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
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
      this.hostel.addRoom(this.floorName, this.tmpRoom);
      console.log(' Room : ' + this.tmpRoom + ' added.');
    }
    
    if(this.roomType == 'single'){
      this.roomRent = 10000;      
    }
    else if(this.roomType == 'double'){
      this.roomRent = 8000;
    }
    else if(this.roomType == 'triple'){
      this.roomRent = 7500
    }
    else{
      this.roomRent = 5000;
    }

    this.dialogRef.close(); 

  }

  close() {
    this.dialogRef.close();
  }

  gotoList() {
    this.router.navigate(['/roms']);
  }

}
