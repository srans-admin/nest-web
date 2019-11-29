import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router } from '@angular/router';
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
<<<<<<< HEAD
  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roomDetails(id: number){
    this.router.navigate(['details', id]);
  }

  putRoom(id: number){
    this.router.navigate(['update', id]);
  }
=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
}
