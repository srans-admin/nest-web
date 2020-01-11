import { Component, OnInit } from '@angular/core';
import { UserService } from '.././_services/user.service';
import { User } from '.././_models/user';
import { TenantBooking } from '.././_models/tenant-booking';
import { Hostel } from '.././_models/hostel';
import { Floor } from '.././_models/floor';
import { Room } from '.././_models/room';
import { Invoice } from '.././_models/invoice';
import { Payment } from '.././_models/payment';
import { Router, ActivatedRoute } from '@angular/router';
import { HostelService } from '.././_services/hostel.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';
import { MatDialog } from '@angular/material/dialog';
import { BanktransferComponent } from 'src/app/payment/banktransfer/banktransfer.component';

@Component({
  selector: 'app-vacate',
  templateUrl: './vacate.component.html',
  styleUrls: ['./vacate.component.css']
})
export class VacateComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  user: User = new User();    
  hostel: Hostel = new Hostel();
  tempfloor: Array<any>;
  totalRooms: Number=1; 
  floor: Floor = new Floor();
  room: Room = new Room();
  payment: Payment = new Payment();
  acknoldgmentMsg: string = "";
  tempFloors: []; 
  selectedHostel : Hostel; 
  isBedSelected : boolean = false;
  selectedBedInfo : any = null;
  isHostelPaymentReq:boolean = true;
  tenantBooking : TenantBooking = new TenantBooking();

  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router,
      private hostelService: HostelService,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private alertMessage: AlertMessage,
      private nIDOSMessages: NIDOSMessages) { }

  ngOnInit() {
  }

}
