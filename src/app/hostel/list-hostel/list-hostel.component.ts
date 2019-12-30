import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../_services/hostel.service";
import { Hostel } from "../../_models/hostel";
import { Router, ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { Room } from '../../_models/room';
import { environment } from '../../../environments/environment';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';
import {MatCardModule} from '@angular/material/card';
 

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.css']
})
export class ListHostelComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  hostelImages: Array<Hostel> = [];
  room: Room = new Room();
  extendingviews: Observable<Hostel[]>;
  searchTerm: string;
  acknoldgmentMsg : string = null; 
   
  private extendedViewUrl = environment.appUrl+ '/api/v1/hostels/{id}/extendingviews';
  
  constructor(private hostelService: HostelService,
    private router: Router,
    private route: ActivatedRoute,
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,
    private http: HttpClient) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {

     this.hostelService.getHostelsList().subscribe(res => { 
        this.hostels = res;
      },err =>{ 
        this.alertMessage.showHttpMessage(err);
      });

    }
  
    deleteHostel(id: number) {
      if(window.confirm("Are you to remove the hostel : "+id)){
      this.hostelService.deleteHostel(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
        }
    }
  
    hostelDetails(id: number){
      this.router.navigate(['details', id]);      
    }
  
    updateHostel(id: number){
      this.router.navigate(['update', id]);
    }

    listHostel(id: number){
      this.router.navigate(['floor', id]);
    }

  }
  

  