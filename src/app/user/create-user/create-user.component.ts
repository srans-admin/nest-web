import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { TenantBooking } from '../../_models/tenant-booking';
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
import { MatDialog } from '@angular/material/dialog';
import { BanktransferComponent } from 'src/app/payment/banktransfer/banktransfer.component';
import { AuthenticationService } from 'src/app/_auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private hostels: Observable<Hostel[]>;
  private imageUrl: string = "/assets/img/showimage.jpg";
  private userImage: File = null;
  private idproofImage: File = null; 
  private idImage: File = null;
  private user: User = new User();    
  private hostel: Hostel = new Hostel();
  private tempfloor: Array<any>;
  private totalRooms: Number=1; 
  private floor: Floor = new Floor();
  private room: Room = new Room();
  private payment: Payment = new Payment();
  private acknoldgmentMsg: string = "";
  private tempFloors: []; 
  private selectedHostel : Hostel; 
  private isBedSelected : boolean = false;
  private selectedBedInfo : any = null;
  private isHostelPaymentReq:boolean = true;
  private tenantBooking : TenantBooking = new TenantBooking();
  private currentUser: User;
 
 
  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router,
      private hostelService: HostelService,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private alertMessage: AlertMessage,
      private authenticationService: AuthenticationService,
      private nIDOSMessages: NIDOSMessages
      ) { 
        this.currentUser = this.authenticationService.currentUser;
      }

  ngOnInit() { 
       this.filterForeCasts();
  }
  
  save() {
    
    this.setTenantBooking();
    this.userService.createUser(this.user)
      .subscribe(res => { 
        var obj : any =  res;  
            //Upload UserPic as Image 
            this.uploadImage(this.userImage, 'userpic', obj.userId ); 

            //Upload ID Proof as Image
            this.uploadImage(this.idproofImage, 'idproofImage', obj.userid );  
            this.alertMessage.showSuccessMsg( this.nIDOSMessages.TenantCreationSuccess + obj.userId );  
            this.gotoList();
          },  
          err => {   
            this.alertMessage.showFailedMsg( this.nIDOSMessages.TenantCreationFailed + err.message );  
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
    this.hostels = this.hostelService.getHostelsList(this.currentUser.userId);
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

setTenantBooking(){ 
  
  this.tenantBooking.tenantId	= -1;
  if(this.selectedBedInfo){
    this.tenantBooking.hostelId  =	this.selectedBedInfo.bed.hostelId;
    this.tenantBooking.floorId		=this.selectedBedInfo.bed.floorId
    this.tenantBooking.roomId		=this.selectedBedInfo.bed.roomId
    this.tenantBooking.roomBedId	=this.selectedBedInfo.bed.id
    this.tenantBooking.roomRent	 =this.selectedBedInfo.bed.roomRent
    this.tenantBooking.allotedFrom = new Date();
    this.tenantBooking.allotedTill = null;
  } 

  this.user.tenantBooking = this.tenantBooking;

}
 
addTransfer(){

  const dialogRef = this.dialog.open(BanktransferComponent, {
  width: '40%',
  height: '40%',
  data: {
  }
  });
  
  dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
  });
  
  
  }

}
