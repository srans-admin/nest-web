import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { AddHostelComponent } from './hostel/add-hostel/add-hostel.component';
import { ListHostelComponent } from './hostel/list-hostel/list-hostel.component';
import { DeleteHostelComponent } from './hostel/delete-hostel/delete-hostel.component';
import { EditHostelComponent } from './hostel/edit-hostel/edit-hostel.component';
import { ViewComponent } from './hostel/view/view.component';
import { AddFloorComponent } from './floor/add-floor/add-floor.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { ListFloorComponent } from './floor/list-floor/list-floor.component';
import { ListRoomComponent } from './room/list-room/list-room.component';


const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
  { path: 'hostels/add', component: CreateHostelComponent },
  { path: 'update/:id', component: EditHostelComponent },
  { path: 'details/:id', component: ViewComponent },
  { path: 'createFloor/:id', component: AddFloorComponent},
  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'hostels', component: ListHostelComponent},
  { path: 'hostels/viewtabs', component: AddHostelComponent},
  { path: 'floor/:id', component: ListFloorComponent},
  // { path: 'addFloor/:id', component: AddFloorComponent},
  { path: 'hostels/addFloor/rooms', component: AddRoomComponent},
  { path: 'roms', component: ListRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
