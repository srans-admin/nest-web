import { Component, OnInit } from '@angular/core';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Floor } from '../../floor';
import { FloorService } from '../../floor.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddFloorComponent } from 'src/app/floor/add-floor/add-floor.component';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { AddRoomComponent } from 'src/app/room/add-room/add-room.component';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {
  dynamicForm : FormGroup;
  
  constructor(private hostelService: HostelService, private router: Router, 
    private dialog: MatDialog, private formBuilder: FormBuilder) { }
  
  hostel: Hostel = new Hostel();
  submitted = false;

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      numberOfFloors: [''],
      floors: new FormArray([]),
      numberOfRooms: [''],
      roomss: new FormArray([]),
    })
  }

  get f() { return this.dynamicForm.controls;}
  get t() { return this.f.floors as FormArray;}
  get r() { return this.f.roomss as FormArray;}

  onChangeFloors(e){
    const numberOfFloors = e.target.value || 0;
    if (this.t.length < numberOfFloors){
      for(let i = this.t.length; i < numberOfFloors; i++){
        this.t.push(this.formBuilder.group({
            name: [''],
            description: ['']
            // room: ['']
        }));
      }
    } else{
      for(let i = this.t.length; i >= numberOfFloors; i--){
        this.t.removeAt(i);
      }
    }
  }

  onChangeRooms(e){
    const numberOfRooms = e.target.value || 0;
    if (this.t.length < numberOfRooms){
      for(let i = this.t.length; i < numberOfRooms; i++){
        this.t.push(this.formBuilder.group({
            numbers: [''],
            share: ['']
        }));
      }
    } else{
      for(let i = this.t.length; i >= numberOfRooms; i--){
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    if(this.dynamicForm.invalid){
      return;
    }  
    //alert('success \n' + JSON.stringify(this.dynamicForm.value));
    console.log(this.dynamicForm.value);
  }

  onReset(){
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
    this.r.clear();
  }

  onClear(){
    this.submitted = false;
    this.t.reset();
    this.r.reset();
  }

  save() {
    this.hostelService.addHostel(this.hostel)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.floorService.addFloor(this.floor)
    // .subscribe(data => console.log(data), erro => console.log(error));
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
