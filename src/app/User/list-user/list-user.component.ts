import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource,MatSort} from '@angular/material';
import {User} from 'src/app/models/userlist-model';
import {UserService} from 'src/app/services/user.service';

import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddUserComponent} from 'src/app/User/add-user/add-user.component';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {


  constructor(private service: UserService,
    private dialog:MatDialog) { }

  listData : MatTableDataSource<any>;
  displayedColumns :  string[] = ['UserID','Name','emailID','DOB','PhoneNumber','options']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.refreshUserList();
  }

  refreshUserList(){
    var dummyData = [{UserID:1, Name:"rahul", emailID:"rahul@gmail.com", DOB:"09/15/1996", PhoneNumber:"8546572546"},
    {UserID:2, Name:"vinay", emailID:"vinay@gmail.com", DOB:"02/25/1994", PhoneNumber:"9562453214"},
    {UserID:3, Name:"pavan", emailID:"pavan96@gmail.com", DOB:"12/02/1997", PhoneNumber:"8954231456"}]

    // this.service.getUserList() .subscribe(data => {
   
    this.listData = new MatTableDataSource(dummyData);
    this.listData.sort = this.sort;
  // /})
  }

  applySearch(searchvalue: string){
    this.listData.filter= searchvalue.trim().toLocaleLowerCase();
  }

  onEdit(userlist: User){
    console.log(userlist)
  }

  onDelete(id:number){
    console.log(id);
  }

  onAdd(){
const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.width = "70%";
this.dialog.open(AddUserComponent, dialogConfig);

  }

}
