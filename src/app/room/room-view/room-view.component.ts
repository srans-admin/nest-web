import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  id : number;
  room : Room;

  constructor(private roomService: RoomService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];
    
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/roms']);
  }

}
