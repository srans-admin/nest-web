import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../_models/Hostel';
import { HostelService } from '../../_services/hostel.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from 'src/app/room/add-room/add-room.component';
import { Room } from 'src/app/_models/Room';
import { RoomService } from 'src/app/_services/room.service';
import { Floor } from 'src/app/_models/Floor';
import { Observable } from 'rxjs';

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
  acknoldgmentMsg: string = "";
  submitted = false;
  tempFloors: Array<any>;
  totalRooms: Number=1;
  enableSubmit: Boolean =  false;
  receptionUploadFiles: Array<File>;
  facadeUploadFiles: Array<File>;
  b1UploadFiles: Array<File>;
  b2UploadFiles: Array<File>;
  b3UploadFiles: Array<File>;
  miscUploadFiles: Array<File>;
  switch1: boolean;
  switch2: boolean;
  switch3: boolean;
  switch4: boolean;
  switch5: boolean;
  switch6: boolean;

  amenities : ['tv', 'fridge', 'ac', 'mineralWater', 'parking', 'gym']


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
      .subscribe(res => { 
            var obj : any =  res; 

            //Upload Reception Images
            for (let recFile of this.receptionUploadFiles) {
              this.uploadImage(recFile, 'reception', obj.id );
            } 

            //Upload Facade Images
            for (let facFile of this.facadeUploadFiles) {
              this.uploadImage(facFile, 'facade', obj.id );
            }   

            //Upload Bed 1 Images
            for(let b1File of this.b1UploadFiles){
              this.uploadImage(b1File, 'b1', obj.id);
            }

            //Upload Bed 2 Images
            for(let b2File of this.b2UploadFiles){
              this.uploadImage(b2File, 'b2', obj.id);
            }

            //Upload Bed 3 Images
            for(let b3File of this.b3UploadFiles){
              this.uploadImage(b3File, 'b3', obj.id);
            }

            //Upload Misc Images
            for(let miscFile of this.miscUploadFiles){
              this.uploadImage(miscFile, 'misc', obj.id);
            }

            this.acknoldgmentMsg = "Hostel added successfully."+obj.id;
              
          },  
          err => {  
            this.acknoldgmentMsg = "Hostel addition failed ."+err;
            alert(this.acknoldgmentMsg );  
          });
    
    // this.hostel.array.forEach(e => {
    //   console.log();
    // });

    this.hostel = new Hostel();
    this.gotoList();
  } 
  
  
  uploadImage(curFile: File, type: string, id : number){
    this.hostelService.uploadFile(curFile, type,  id).subscribe(
      res => {   
        console.log('SUCCESS:: Type :'+type+', File: '+curFile+':'+res);
      },
      err =>{
        console.log('FAILED:: Type :'+type+', File: '+curFile+': '+err);
      });
  }

  gotoList() {
    this.router.navigate(['/hostels']);
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

  prepareUpload(typeOfUpload: string, fileInput: any) {
    
    //this.hostel.receptionUIImage = <File>fileInput.target.files[0]; 

    switch(typeOfUpload) { 
      case "reception": { 
        this.receptionUploadFiles = fileInput.target.files;
        break; 
      } 
      case "facade": { 
        this.facadeUploadFiles = fileInput.target.files;
        break; 
      } 
      case "b1": { 
        this.b1UploadFiles = fileInput.target.files;
        break; 
      } 
      case "b2": { 
        this.b2UploadFiles = fileInput.target.files;
        break; 
      } 
      case "b3": { 
        this.b3UploadFiles = fileInput.target.files;
        break; 
      } 
      case "misc": { 
        this.miscUploadFiles = fileInput.target.files;
        break; 
      } 
      default: { 
        console.log("Invalid File uploading "); 
        break;              
     } 
    }
    //this.selectedFile = <File>fileInput.target.files[0];
     
}

  isSubmitEnable(){
    if(this.hostel.floors.length >= 1 && this.hostel.floors[0].rooms.length >= 1){
      this.enableSubmit = true;
    }
  } 
 
}
