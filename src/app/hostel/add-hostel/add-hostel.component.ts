import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from 'src/app/room/add-room/add-room.component';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {  
  
  constructor(private hostelService: HostelService, 
              private router: Router,
              public dialog: MatDialog) { }
  
  hostel: Hostel = new Hostel();
  submitted = false;
  tempFloors: Array<any>;

  ngOnInit() {
    this.tempFloors = [1];
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

  addRoomDailog(): void {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '250px',
      data: this.hostel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });

    
  }

 
}
