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





import { CreateRoleComponent } from './role/create-role/create-role.component';
import { RoleDetailsComponent } from './role/role-details/role-details.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';



import { CreateManagementComponent } from './management/create-management/create-management.component';
import { ManagementDetailsComponent } from './management/management-details/management-details.component';
import { ManagementListComponent } from './management/management-list/management-list.component';
import { UpdateManagementComponent } from './management/update-management/update-management.component';

import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { CreateExpenseComponent } from './expense/create-expense/create-expense.component';
import { ExpenseDetailsComponent } from './expense/expense-details/expense-details.component';


import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';


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


// import {UserService} from 'src/app/services/user.service';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateHostelComponent,
    HostelDetailsComponent,
    HostelListComponent,
    UpdateHostelComponent,
    CreateRoleComponent,
    RoleDetailsComponent,
    RoleListComponent,

    UpdateRoleComponent,    
    CreateRoleComponent,
    RoleDetailsComponent,
    RoleListComponent,
    UpdateRoleComponent,
    CreateManagementComponent,
    ManagementDetailsComponent,
    ManagementListComponent,
    UpdateManagementComponent,
    ExpenseListComponent,
    UpdateExpenseComponent,
    CreateExpenseComponent,
    ExpenseDetailsComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    CreateInvoiceComponent,
    InvoiceListComponent,

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

    ViewComponent,
    UploadImageComponent 


    

  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,

    AngularMaterialModule,
    MatInputModule,
    MatTableModule, MatIconModule, MatButtonModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],  
  entryComponents:[]
  
})
export class AppModule { }
