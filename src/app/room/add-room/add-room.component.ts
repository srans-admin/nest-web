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

  tmpRoom : Room = new Room();
  hostel : Hostel;

  rooms: Array<Room>=[];

  // constructor(private roomService: RoomService,
  //   private router: Router 
  //    ) { }

    constructor(private roomService: RoomService,
    private router: Router,
    public dialogRef: MatDialogRef<AddRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hostel) {

      console.log('Ram : '+data);
      this.hostel = data;
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  

    room : Room = new Room();
    submitted = false;

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

  addRoom(){

    this.rooms.push(this.tmpRoom);
 
  }

  addRoomToHostel(){

    this.hostel.addRoom(this.tmpRoom);
 
  }

  gotoList() {
    this.router.navigate(['/roms']);
  }

}
