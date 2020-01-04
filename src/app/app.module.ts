import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CUSTOM_ELEMENTS_SCHEMA} from '@angular-devkit/build-angular';
import { MatTabsModule } from '@angular/material';
// import { MatFormField } from '@angular/material';

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

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { ViewComponent } from './hostel/view/view.component';
 
import { RoomViewComponent } from './room/room-view/room-view.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

import { CreatePaymentComponent } from './payment/create-payment/create-payment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';

import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';
import { ComplaintListComponent } from './complaint/complaint-list/complaint-list.component';
import { UpdateComplaintComponent } from './complaint/update-complaint/update-complaint.component';
import { ComplaintDetailsComponent } from './complaint/complaint-details/complaint-details.component';

import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { HostelFilterPipe } from './hostel/hostel-filter.pipe';
import { UserFilterPipe } from './user/user-filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { FloorViewComponent } from './hostel/floor-view/floor.view.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubscriptionRegisterComponent } from './subscription-register/subscription-register.component';
import { DashboardSuperadminComponent } from './dashboard-superadmin/dashboard-superadmin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CookieService } from 'ngx-cookie-service';
import { BanktransferComponent } from './payment/banktransfer/banktransfer.component'
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';


// import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
// import { FormUploadComponent } from './upload/form-upload/form-upload.component';
// import { ListUploadComponent } from './upload/list-upload/list-upload.component';
// import { UploadFileService } from './upload-file.service';

import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LoginComponent,
    RegistrationComponent,

    DashboardSuperadminComponent,
    DashboardAdminComponent,
    DashboardHomeComponent,
    DashboardUserComponent,

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

    AddHostelComponent,
    ListHostelComponent,
    EditHostelComponent,
    DeleteHostelComponent,
    FloorViewComponent,

    AddFloorComponent,
    ListFloorComponent,
    EditFloorComponent,
    DeleteFloorComponent,

    AddRoomComponent,
    ListRoomComponent,
    EditRoomComponent,
    DeleteRoomComponent,

    ViewComponent, 
    RoomViewComponent,

    DoughnutChartComponent,
    BarChartComponent,

    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    CreateInvoiceComponent,
    InvoiceListComponent,
    HostelFilterPipe,
    UserFilterPipe,

    CreatePaymentComponent,
    PaymentListComponent,

    AddComplaintComponent,
    ComplaintListComponent,
    UpdateComplaintComponent,
    ComplaintDetailsComponent, 
    SubscriptionRegisterComponent,
 
    // DetailsUploadComponent,
    // FormUploadComponent,
    // ListUploadComponent
    // CUSTOM_ELEMENTS_SCHEMA

     CreateCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    UpdateCategoryComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    ChartsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    ToastrModule.forRoot()
    // MatFormField
  ],
  providers: [CookieService],  
  // UploadFileService
  bootstrap: [AppComponent],
entryComponents:[CreateExpenseComponent]

})
export class AppModule { }

// References::
// Toaster : https://blog.jscrambler.com/how-to-create-angular-toastr-notifications/
