import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
<<<<<<< HEAD
=======
import { AddHostelComponent } from './hostel/add-hostel/add-hostel.component';
import { ListHostelComponent } from './hostel/list-hostel/list-hostel.component';
import { DeleteHostelComponent } from './hostel/delete-hostel/delete-hostel.component';
import { EditHostelComponent } from './hostel/edit-hostel/edit-hostel.component';
import { ViewComponent } from './hostel/view/view.component';
import { AddFloorComponent } from './floor/add-floor/add-floor.component';
>>>>>>> 14c1655fcf61b5b9c5ca421f5c625e87069cbf63

import { RoleDetailsComponent } from './role/role-details/role-details.component';

import { ManagementListComponent } from './management/management-list/management-list.component';
import { UpdateManagementComponent } from './management/update-management/update-management.component';
import { CreateManagementComponent } from './management/create-management/create-management.component';
import { ManagementDetailsComponent } from './management/management-details/management-details.component';

import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './expense/expense-details/expense-details.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
<<<<<<< HEAD
  { path: 'hostels', component: HostelListComponent },
=======
  // { path: 'hostels', component: HostelListComponent },
>>>>>>> 14c1655fcf61b5b9c5ca421f5c625e87069cbf63
  { path: 'hostels/add', component: CreateHostelComponent },
  { path: 'update/:id', component: UpdateHostelComponent },
  { path: 'details/:id', component: HostelDetailsComponent },

  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'rupdate/:id', component: UpdateRoleComponent },
  { path: 'rdetails/:id', component: RoleDetailsComponent },

<<<<<<< HEAD
  { path: 'management', component: ManagementListComponent },
  { path: 'management/add', component: CreateManagementComponent },
=======
  { path: 'managements', component: ManagementListComponent },
  { path: 'managements/add', component: CreateManagementComponent },
>>>>>>> f931fb3d30454cbf510d86baf9c17e93f26f1d78
  { path: 'mupdate/:id', component: UpdateManagementComponent },
  { path: 'mdetails/:id', component: ManagementDetailsComponent },

  { path: 'expenses', component: ExpenseListComponent },
  { path: 'expenses/add', component: CreateExpenseComponent },
  { path: 'eupdate/:id', component: UpdateExpenseComponent },
  { path: 'edetails/:id', component: ExpenseDetailsComponent },
<<<<<<< HEAD
=======

  { path: 'user', component: UserListComponent },
  { path: 'user/add', component: CreateUserComponent },
  { path: 'userupdate/:id', component: UpdateUserComponent },
  { path: 'userdetails/:id', component: UserDetailsComponent },

  { path: 'invoice', component: InvoiceListComponent },
  { path: 'invoice/add', component: CreateInvoiceComponent},

  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'update/:id', component: UpdateRoleComponent },
  { path: 'details/:id', component: RoleDetailsComponent },

  { path: 'roles', component: RoleListComponent },
  { path: 'roles/add', component: CreateRoleComponent },
  { path: 'update/:id', component: UpdateRoleComponent },
<<<<<<< HEAD
>>>>>>> f931fb3d30454cbf510d86baf9c17e93f26f1d78

=======
  // { path: 'hostels', component: HostelListComponent },
  // { path: 'hostels/add', component: CreateHostelComponent },
  // { path: 'update/:id', component: UpdateHostelComponent },
  // { path: 'details/:id', component: HostelDetailsComponent },
  { path: 'hostels', component: ListHostelComponent},
  { path: 'hostels/viewtabs', component: AddHostelComponent},
  { path: 'hostels/addFloor', component: AddFloorComponent}
>>>>>>> 14c1655fcf61b5b9c5ca421f5c625e87069cbf63
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
