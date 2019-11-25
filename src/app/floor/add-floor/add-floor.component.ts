import { Component, OnInit } from '@angular/core';
import { Floor } from '../../floor';
import { FloorService } from '../../floor.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-floor',
  templateUrl: './add-floor.component.html',
  styleUrls: ['./add-floor.component.css']
})
export class AddFloorComponent implements OnInit {
  dynamicForm : FormGroup;

  constructor(private floorService: FloorService, private router: Router, 
    private dialog: MatDialog, private formBuilder: FormBuilder) { }

    
  floor: Floor = new Floor();
  submitted = false;

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      numberOfFloors: [''],      
      floors: new FormArray([])
    })
  }

  get f() { return this.dynamicForm.controls;}
  get t() { return this.f.floors as FormArray;}


  onChangeFloors(e){
    const numberOfFloors = e.target.value || 0;
    if (this.t.length < numberOfFloors){
      for(let i = this.t.length; i < numberOfFloors; i++){
        this.t.push(this.formBuilder.group({
          floor_number: [''],
          numberOfRooms: ['']
        }));
      }
    } else{
      for(let i = this.t.length; i >= numberOfFloors; i--){
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
    this.submitted = true;
    this.save();
    if(this.dynamicForm.invalid){
      return;
    }  
    //alert('success \n' + JSON.stringify(this.dynamicForm.value));
  }

  onReset(){
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }

  onClear(){
    this.submitted = false;
    this.t.reset();
  }

  save() {
    this.floorService.addFloor(this.floor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.floor = new Floor();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/floors']);
  }

}
