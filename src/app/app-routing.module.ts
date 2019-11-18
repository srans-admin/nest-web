import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
<<<<<<< HEAD
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
=======
import { AddHostelComponent } from './hostel/add-hostel/add-hostel.component';
import { ListHostelComponent } from './hostel/list-hostel/list-hostel.component';
import { DeleteHostelComponent } from './hostel/delete-hostel/delete-hostel.component';
import { EditHostelComponent } from './hostel/edit-hostel/edit-hostel.component';
import { ViewComponent } from './hostel/view/view.component';
>>>>>>> 693473fee03549b77075a75488df95d62bb44de8


const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
<<<<<<< HEAD
  { path: 'hostels', component: HostelListComponent },
  { path: 'hostels/add', component: CreateHostelComponent },
  { path: 'update/:id', component: UpdateHostelComponent },
  { path: 'details/:id', component: HostelDetailsComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'update/:id', component: UpdateRoleComponent },
=======
  // { path: 'hostels', component: HostelListComponent },
  // { path: 'hostels/add', component: CreateHostelComponent },
  // { path: 'update/:id', component: UpdateHostelComponent },
  // { path: 'details/:id', component: HostelDetailsComponent },
  { path: 'hostels', component: ListHostelComponent},
  { path: 'hostels/viewtabs', component: ViewComponent},
>>>>>>> 693473fee03549b77075a75488df95d62bb44de8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
