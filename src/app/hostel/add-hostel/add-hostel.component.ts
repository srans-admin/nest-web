import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddFloorComponent } from 'src/app/floor/add-floor/add-floor.component';
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
<<<<<<< HEAD
export class AddHostelComponent implements OnInit {  
  
  constructor(private hostelService: HostelService, private router: Router) { }
  
=======
export class AddHostelComponent implements OnInit {

  constructor(private hostelService: HostelService, private router: Router, 
    private dialog: MatDialog) { }

>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  hostel: Hostel = new Hostel();
  submitted = false;

  ngOnInit() {
<<<<<<< HEAD
  }  

  newHostel(): void {
    this.submitted = false;
    this.hostel = new Hostel();
=======
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

  onSubmit() {
    this.submitted = true;
<<<<<<< HEAD
    this.save();
=======
    this.save();    
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
  }

  save() {
    this.hostelService.createHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
<<<<<<< HEAD
  }  
=======
  }
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb

  gotoList() {
    this.router.navigate(['/hostels']);
  }
<<<<<<< HEAD
  
=======

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddFloorComponent, dialogConfig)
  }
>>>>>>> 2adc0a65623cb148215a4dc58a58e7bd634da3fb
}
