import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router } from '@angular/router';
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

<<<<<<< HEAD
  constructor(private roomService: RoomService,
    private router: Router) { }

    room : Room = new Room();
    submitted = false;
=======
  constructor() { }
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

  ngOnInit() {
  }

<<<<<<< HEAD
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

=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
}
