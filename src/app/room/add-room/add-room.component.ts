import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  constructor(private roomService: RoomService,
    private router: Router) { }

    room : Room = new Room();
    submitted = false;

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    this.roomService.postRoom(this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/roms']);
  }

}
