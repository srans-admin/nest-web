import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hostel } from '../../_models/hostel';
import { HostelService } from '../../_services/hostel.service';
import { Room } from 'src/app/_models/Room';

@Component({
  selector: 'app-edit-hostel',
  templateUrl: './edit-hostel.component.html',
  styleUrls: ['./edit-hostel.component.css']
})
export class EditHostelComponent implements OnInit {
  id : number;
  hostel : Hostel;
  room : Room;

  constructor(private route: ActivatedRoute,private router: Router,
    private hostelService: HostelService) { }

  ngOnInit() {
    this.hostel = new Hostel();

    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;
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

  gotoList() {
    this.router.navigate(['/hostels']);
  }

}
