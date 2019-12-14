import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Hostel } from '../../hostel';
import { Floor } from '../../floor';
import { Room } from '../../room';
import { Invoice } from '../../invoice';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HostelService } from '../../hostel.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  hostels: Observable<Hostel[]>; 
  
  //variable declaration
  imageUrl: string = "/assets/img/showimage.jpg";
  userImage: File = null; 
//  idImage: File = null;
  idproofImage: File = null;
  user: User = new User();    
  hostel: string = "0";
  tempfloor: Array<any>;
  totalRooms: Number=1;
  invoice: Invoice = new Invoice();
  submitted = false;
  floor: Floor = new Floor();
  room: Room = new Room();
  // bed: Beds= new Beds();
  acknoldgmentMsg: string = "";
 
  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router,
    private hostelService: HostelService,private httpClient: HttpClient) { }

  ngOnInit() {
    // this.tempFloors = [1];
    // this.populateFloors();
    // this.filterForeCasts();
  }
  // handleFileInput(file: FileList) {
  //   this.fileToUpload = file.item(0);
  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result;
  //   } 
  //   reader.readAsDataURL(this.fileToUpload);
  // }

  newRole(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    // console.log('Current User : '+this.user);
    this.userService.createUser(this.user)
      .subscribe(res => {

        var obj : any =  res; 

            //Upload user Images 
            this.uploadImage(this.userImage, 'userpic', obj.userId );
             

            //Upload Idproof Images
            
              this.uploadImage(this.idproofImage, 'idproofImage', obj.userid );
        

            this.acknoldgmentMsg = "Tenant added successfully."+obj.userId;
              
          },  
          err => {  
            this.acknoldgmentMsg = "Tenant addition failed ."+err;
            alert(this.acknoldgmentMsg );  
          });

            this.user = new User();
            this.gotoList();
  }

  uploadImage(curFile: File, type: string, id : number){
    this.userService.uploadFile(curFile, type,  id).subscribe(
      res => {   
        console.log('SUCCESS:: Type :'+type+', File: '+curFile+':'+res);
      },
      err =>{
        console.log('FAILED:: Type :'+type+', File: '+curFile+': '+err);
      });
  }

  filterForeCasts()
  {
    // debugger;
    this.hostels = this.hostelService.getHostelsList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/add']);
    // this.router.navigate(['/hostels']);
  }

  // getBedsWithType(room: Room, type: String): Array<Bed>{
  //   let beds : Array<Bed> = [];

  //   this.totalBeds = room.beds.length;

  //   //TODO : Need to use map method here
  //   for( let i=0; i < room.beds.length ; i++){ 
  //     if(room.beds[i].roomName == type){
  //       beds.push(room.beds[i]);
  //     } 
  //   } 

  //  this.isSubmitEnable(); 
  //   return beds;

  // }


  
  prepareUpload(typeOfUpload: string, fileInput: any) {
    
    //this.hostel.receptionUIImage = <File>fileInput.target.files[0]; 

    switch(typeOfUpload) { 
      case "userImage": { 
        this.userImage = fileInput.target.files[0];
        break; 
      }
      case "idproofImage": { 
        this.idproofImage = fileInput.target.files[0];
        break; 
      }  
      // case "id": { 
      //   this.idImage = fileInput.target.files[0];
      //   break; 
      // } 
      default: { 
        console.log("Invalid File uploading "); 
        break;              
     } 
    }
    //this.selectedFile = <File>fileInput.target.files[0];
     
}

// isSubmitEnable(){
//   if(this.hostel.rooms.length >= 1 && this.hostel.rooms[0].beds.length >= 1){
//     this.enableSubmit = true;
//   }
// } 

}
