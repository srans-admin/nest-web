import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hostel } from '../../_models/hostel';
import { HostelService } from '../../_services/hostel.service';

@Component({
  selector: 'app-edit-hostel',
  templateUrl: './edit-hostel.component.html',
  styleUrls: ['./edit-hostel.component.css']
})
export class EditHostelComponent implements OnInit {
  private id : number;
  private hostel : Hostel;
  private temp : number = 0;
  private rooms : number;
  private  tempFloors: Array<any>;

  constructor(private route: ActivatedRoute,private router: Router,
    private hostelService: HostelService) { }

  ngOnInit() {
    this.hostel = new Hostel();

    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;

        for(let i = 0; i < this.hostel.floors.length;i++){
          this.rooms = this.hostel.floors[i].rooms.length;
          this.temp = this.temp + this.rooms;
        }        
        this.rooms = this.temp; 

        this.populateFloors();

      }, error => console.log(error));      
    
  }

  putHostel() {
    this.hostelService.putHostel(this.id, this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }

  onSubmit() {
    this.putHostel();    
  }

  populateFloors(){ 
    for (let i = 1; i <=  this.hostel.numOfFloors; i++) {
      this.tempFloors.push(this.hostel.numOfFloors[i]);
    } 

    this.hostel.addFloors(this.hostel.numOfFloors);

  }

  gotoList() {
    this.router.navigate(['/hostels']);
  }

}
