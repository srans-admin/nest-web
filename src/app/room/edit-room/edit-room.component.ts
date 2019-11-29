import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RoomService } from '../../room.service';
import { Room } from '../../room';
import { Router, ActivatedRoute } from '@angular/router';
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
<<<<<<< HEAD
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
  
  putRoom() {
    this.roomService.putRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.putRoom();    
  }

  gotoList() {
    this.router.navigate(['/roms']);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

}
