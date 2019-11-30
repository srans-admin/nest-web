import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id : number;
  hostel : Hostel;

  constructor(private hostelService:HostelService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.hostel = new Hostel();

    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/hostels']);
  }

}
