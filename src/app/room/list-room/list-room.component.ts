import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRole(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roleDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateRole(id: number){
    this.router.navigate(['update', id]);
  }
}
