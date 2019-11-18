import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
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
 
@NgModule({
  declarations: [
    AppComponent,
    CreateHostelComponent,
    HostelDetailsComponent,
    HostelListComponent,
    UpdateHostelComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
