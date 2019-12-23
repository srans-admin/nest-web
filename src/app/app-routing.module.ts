import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { AddHostelComponent } from './hostel/add-hostel/add-hostel.component';
import { ListHostelComponent } from './hostel/list-hostel/list-hostel.component';
import { DeleteHostelComponent } from './hostel/delete-hostel/delete-hostel.component';
import { EditHostelComponent } from './hostel/edit-hostel/edit-hostel.component';

import { ViewComponent } from './hostel/view/view.component';
import { AddFloorComponent } from './floor/add-floor/add-floor.component';
import { AddRoomComponent } from './room/add-room/add-room.component';

import { ListFloorComponent } from './floor/list-floor/list-floor.component';
import { ListRoomComponent } from './room/list-room/list-room.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';

import { CreatePaymentComponent } from './payment/create-payment/create-payment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';

import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';
import { ComplaintListComponent } from './complaint/complaint-list/complaint-list.component';
import { UpdateComplaintComponent } from './complaint/update-complaint/update-complaint.component';
import { ComplaintDetailsComponent } from './complaint/complaint-details/complaint-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'hostel', pathMatch: 'full' },
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

  { path: 'hostels', component: ListHostelComponent},
  { path: 'hostels/viewtabs', component: AddHostelComponent},
  { path: 'hostels/addFloor/rooms', component: AddRoomComponent},
  { path: 'update/:id', component: EditHostelComponent },
  { path: 'details/:id', component: ViewComponent },

  { path: 'floor', component: ListFloorComponent},
  { path: 'floor/addFloor/:id', component: AddFloorComponent},

  { path: 'roms', component: ListRoomComponent},

  { path: 'user', component: UserListComponent },
  { path: 'user/add', component: CreateUserComponent },
  { path: 'userupdate/:id', component: UpdateUserComponent },
  { path: 'userdetails/:id', component: UserDetailsComponent },

  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'bar-chart', component: BarChartComponent },

  { path: 'invoice', component: InvoiceListComponent },
  { path: 'invoice/add', component: CreateInvoiceComponent},

  { path: 'payment', component: PaymentListComponent },
  { path: 'payment/add', component: CreatePaymentComponent},

  { path: 'complaint', component: ComplaintListComponent},
  { path: 'complaint/add', component: AddComplaintComponent},
  { path: 'complaintupdate/:id', component: UpdateComplaintComponent},
  { path: 'compaintdetails/:id', component: ComplaintDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
