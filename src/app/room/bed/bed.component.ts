import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Room } from '../../room';
import { RoomService } from '../../room.service';
import { BedService} from '../../bed.service';
import { Bed } from 'src/app/bed';
import { Hostel } from 'src/app/hostel';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {

  tmpBed: Bed = new Bed();
  room: Room;
  bed: Bed;
  hostel: Hostel;
  roomName: string;
  submitted = false;
  beds: Array<Bed> = [];
  numOfBeds: number = 1; 
  bedNumbers : string = "";
  roomType: string = "Single";

  //Errors
  errorMsg:String="";

  constructor(private roomService: RoomService,
    private router: Router,
    private bedService: BedService,
    public dialogRef: MatDialogRef<BedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  newBed(): void {
    this.submitted = false;
    this.bed = new Bed();
  }

  // addRoomToHostel() {
  //   let currBedNumbers = this.bedNumbers.split(",");
  //   if (this.numOfBeds != currBedNumbers.length) {
  //     this.errorMsg = "Bed Numbers count not mached";
  //     return;
  //   }    

  //   for (let i = 0; i < currBedNumbers.length; i++) {
  //     this.tmpBed = new Bed();
  //     this.tmpBed.bedNumber = currBedNumbers[i];
  //     this.tmpBed.roomType = this.roomType;
  //     this.room.addBed(this.roomName, this.tmpBed);
  //     console.log(' Bed : ' + this.tmpBed + ' added.');
  //   }
  //   this.dialogRef.close(); 
  // }

  addBed() {
    this.beds.push(this.tmpBed);
  }

  save() {
    this.bedService.postBed(this.bed)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    // this.gotoList();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
