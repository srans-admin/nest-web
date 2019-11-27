import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { RoleDetailsComponent } from './role/role-details/role-details.component';

import { ManagementListComponent } from './management/management-list/management-list.component';
import { UpdateManagementComponent } from './management/update-management/update-management.component';
import { CreateManagementComponent } from './management/create-management/create-management.component';
import { ManagementDetailsComponent } from './management/management-details/management-details.component';

import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './expense/expense-details/expense-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
  { path: 'hostels', component: HostelListComponent },
  { path: 'hostels/add', component: CreateHostelComponent },
  { path: 'update/:id', component: UpdateHostelComponent },
  { path: 'details/:id', component: HostelDetailsComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'rupdate/:id', component: UpdateRoleComponent },
  { path: 'rdetails/:id', component: RoleDetailsComponent },

  { path: 'management', component: ManagementListComponent },
  { path: 'management/add', component: CreateManagementComponent },
  { path: 'mupdate/:id', component: UpdateManagementComponent },
  { path: 'mdetails/:id', component: ManagementDetailsComponent },

  { path: 'expenses', component: ExpenseListComponent },
  { path: 'expenses/add', component: CreateExpenseComponent },
  { path: 'eupdate/:id', component: UpdateExpenseComponent },
  { path: 'edetails/:id', component: ExpenseDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
