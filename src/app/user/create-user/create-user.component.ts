import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { Hostel } from '../../_models/hostel';
import { Floor } from '../../_models/floor';
import { Room } from '../../_models/room';
import { Invoice } from '../../_models/invoice';
import { Payment } from '../../_models/payment';
import { Router, ActivatedRoute } from '@angular/router';
import { HostelService } from '../../_services/hostel.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  imageUrl: string = "/assets/img/showimage.jpg";
  userImage: File = null;
  idproofImage: File = null; 
  idImage: File = null;
  user: User = new User();    
  hostel: Hostel = new Hostel();
  tempfloor: Array<any>;
  totalRooms: Number=1;
  invoice: Invoice = new Invoice();
  payment: Payment = new Payment(); 
  floor: Floor = new Floor();
  room: Room = new Room();
  acknoldgmentMsg: string = "";
  tempFloors: []; 
  selectedHostel : Hostel; 
  isBedSelected : boolean = false;
  selectedBedInfo : any = null;
  isHostelPaymentReq:boolean = true;

 
 
  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router,
      private hostelService: HostelService,
      private httpClient: HttpClient,
      private alertMessage: AlertMessage,
      private nIDOSMessages: NIDOSMessages
      ) { }

  ngOnInit() { 
       this.filterForeCasts();
  }
  
  save() {
    
    this.userService.createUser(this.user)
      .subscribe(res => { 
        var obj : any =  res;  
            //Upload UserPic as Image 
            this.uploadImage(this.userImage, 'userpic', obj.userId ); 

            //Upload ID Proofas Image
            this.uploadImage(this.idproofImage, 'idproofImage', obj.userid );  
            this.alertMessage.showSuccessMsg( this.nIDOSMessages.TenantCreationSuccess + obj.userId );  
            this.gotoList();
          },  
          err => {   
            this.alertMessage.showFailedMsg( this.nIDOSMessages.TenantCreationFailed + err );  
          });
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
    this.hostels = this.hostelService.getHostelsList();
  }

  onSubmit() { 
    this.save();
  }

  gotoList() {
    this.router.navigate(['/user']); 
  }


  
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

      case "id": { 
        this.idImage = fileInput.target.files[0];
        break; 
      } 
      default: { 
        console.log("Invalid File uploading "); 
        break;              
     } 
    }
    //this.selectedFile = <File>fileInput.target.files[0];
     
}

populateHostel(hostelId : number){
  
  this.hostelService.getHostel(hostelId).subscribe(
    res => {   
      this.selectedHostel = res;
    },
    err =>{
      console.log('FAILED:: '+err);
    }); 
}


onSelectedBedInfoEmited(selectedBedInfo: any){
   
  this.isBedSelected = true;
  this.selectedBedInfo = selectedBedInfo;
  this.selectedBedInfo.hostelName = this.selectedHostel.hostelName;

  window.confirm('Hostel Name : '+this.selectedBedInfo.hostelName+'\nRoom Num: '+this.selectedBedInfo.bed.roomId + '\nBed Num: '+this.selectedBedInfo.bed.id +' \nRoom Rent : '+this.selectedBedInfo.roomRent+' \nSharing : '+this.selectedBedInfo.roomType+' \nPlease confirm your booking !!');
 
  console.log('selectedBedInfo:'+selectedBedInfo.roomRent);

}

isHostelPaymentRequired(event){ 
  this.isHostelPaymentReq = event.checked; 
}
 

}
