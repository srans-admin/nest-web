import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';


const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
  { path: 'hostels', component: HostelListComponent },
  { path: 'hostels/add', component: CreateHostelComponent },
  { path: 'update/:id', component: UpdateHostelComponent },
  { path: 'details/:id', component: HostelDetailsComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'update/:id', component: UpdateRoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
