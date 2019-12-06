import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from 'src/app/room/add-room/add-room.component';
import { Room } from 'src/app/room';
import { RoomService } from 'src/app/room.service';
import { Floor } from 'src/app/floor';
import { EditRoomComponent } from 'src/app/room/edit-room/edit-room.component';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {  
  
  constructor(private hostelService: HostelService, 
              private router: Router,
              public dialog: MatDialog,
              private roomService: RoomService) { }
  
  hostel: Hostel = new Hostel();
  submitted = false;
  tempFloors: Array<any>;
  totalRooms: Number=1;
  enableSubmit: Boolean =  false;
  room = new Room();

  ngOnInit() {
    this.tempFloors = [1];
    this.populateFloors();
  }  

  newHostel(): void {
    this.submitted = false;
    this.hostel = new Hostel();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.hostelService.createHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }  

  gotoList() {
    this.router.navigate(['/hostels']);
  }

  openRoomPopup(){ 

  }

  populateFloors(){  
    
    this.tempFloors = [];
    for (let i = 1; i <=  this.hostel.numOfFloors; i++) {
      this.tempFloors.push(i);
    } 

    this.hostel.addFloors(this.hostel.numOfFloors);

  }

  addRoomDailog(floorName: any): void {

    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '30%',
      data: {
       hostel :  this.hostel,
       floorName : floorName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    }); 
    
  }

  editRoom(room: Room): void{
    const dialogRef = this.dialog.open(EditRoomComponent,{
      width: '30%',
      data: {
        hostel : this.hostel,
        room : this.room.roomName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
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

   this.isSubmitEnable(); 
    return rooms;

  }

  isSubmitEnable(){
    if(this.hostel.floors.length >= 1 && this.hostel.floors[0].rooms.length >= 1){
      this.enableSubmit = true;
    }
  }

 
}
