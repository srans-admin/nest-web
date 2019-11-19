import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddFloorComponent } from 'src/app/floor/add-floor/add-floor.component';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {

  constructor(private hostelService: HostelService, private router: Router, 
    private dialog: MatDialog) { }

  hostel: Hostel = new Hostel();
  submitted = false;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save() {
    this.hostelService.createHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.hostel = new Hostel();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/hostels']);
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddFloorComponent, dialogConfig)
  }
}
