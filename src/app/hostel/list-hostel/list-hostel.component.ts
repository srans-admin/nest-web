import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../hostel.service";
import { Hostel } from "../../hostel";
import { Router, ActivatedRoute } from '@angular/router';
import { ServerConfig } from '../../config/server.config';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../room';

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.css']
})
export class ListHostelComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  room: Room = new Room();
  extendingviews: Observable<Hostel[]>;
  searchTerm: string;

  serverConfig: ServerConfig = new ServerConfig();
  private extendedViewUrl = this.serverConfig.getServerURL() + '/api/v1/hostels/{id}/extendingviews';
  
  constructor(private hostelService: HostelService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.hostels = this.hostelService.getHostelsList();
      
    }

    oneHostel(id: number){
      // this.hostels = this.hostelService.getHostel(id);
      this.extendingviews = this.hostelService.getHostel(id);
      this.hostelDetails(id);
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
      // this.hostels = this.hostelService.getHostel(id);
      // this.hostels = this.hostelService.getHostel(id);
      this.router.navigate(['details', id]);      
    }
  
    updateHostel(id: number){
      this.router.navigate(['update', id]);
    }

    listHostel(id: number){
      this.router.navigate(['floor', id]);
    }

  }
  

  