import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { AngularMaterialModule } from './angular-material.module';
import {MatInputModule} from '@angular/material/input';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
<<<<<<< HEAD
=======
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { DeleteUserComponent } from './User/delete-user/delete-user.component';
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { RoleDetailsComponent } from './role/role-details/role-details.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';

=======
import { AddHostelComponent } from './hostel/add-hostel/add-hostel.component';
import { ListHostelComponent } from './hostel/list-hostel/list-hostel.component';
import { EditHostelComponent } from './hostel/edit-hostel/edit-hostel.component';
import { DeleteHostelComponent } from './hostel/delete-hostel/delete-hostel.component';
import { AddFloorComponent } from './floor/add-floor/add-floor.component';
import { ListFloorComponent } from './floor/list-floor/list-floor.component';
import { EditFloorComponent } from './floor/edit-floor/edit-floor.component';
import { DeleteFloorComponent } from './floor/delete-floor/delete-floor.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { DeleteRoomComponent } from './room/delete-room/delete-room.component';
import { AddFacilityComponent } from './facility/add-facility/add-facility.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { DeleteFacilityComponent } from './facility/delete-facility/delete-facility.component';
import { ViewComponent } from './hostel/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from 'src/app/services/user.service';

 
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
@NgModule({
  declarations: [
    AppComponent,
    CreateHostelComponent,
    HostelDetailsComponent,
    HostelListComponent,
    UpdateHostelComponent,
<<<<<<< HEAD
    CreateRoleComponent,
    RoleDetailsComponent,
    RoleListComponent,
    UpdateRoleComponent 
=======
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateRoleComponent,
    RoleDetailsComponent,
    RoleListComponent,
    UpdateRoleComponent,
    AddHostelComponent,
    ListHostelComponent,
    EditHostelComponent,
    DeleteHostelComponent,
    AddFloorComponent,
    ListFloorComponent,
    EditFloorComponent,
    DeleteFloorComponent,
    AddRoomComponent,
    ListRoomComponent,
    EditRoomComponent,
    DeleteRoomComponent,
    AddFacilityComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    DeleteFacilityComponent,
    ViewComponent 
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    MatInputModule
=======
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatInputModule,
    MatTableModule, MatIconModule, MatButtonModule,
    MatSortModule,
    MatDialogModule
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents:[AddUserComponent]
})
export class AppModule { }
