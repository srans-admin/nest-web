import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Hostel } from '../../hostel';
import { Floor } from '../../floor';
import { Room } from '../../room';
import { Invoice } from '../../invoice';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  imageUrl: string = "/assets/img/showimage.jpg";
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router) { }

    user: User = new User();    
    hostel: Hostel = new Hostel();
    tempfloor: Array<any>;
    totalRooms: Number=1;
    invoice: Invoice = new Invoice();
    submitted = false;
    floor: Floor = new Floor();
    room: Room = new Room();


  ngOnInit() {
    // this.tempFloors = [1];
    // this.populateFloors();
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    } 
    reader.readAsDataURL(this.fileToUpload);
  }

  newRole(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    // console.log('Current User : '+this.user);
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/add']);
    // this.router.navigate(['/hostels']);
  }

}
