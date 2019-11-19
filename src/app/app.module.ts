import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHostelComponent } from './create-hostel/create-hostel.component';
import { HostelDetailsComponent } from './hostel-details/hostel-details.component';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { RoleDetailsComponent } from './role/role-details/role-details.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';
import {MatInputModule} from '@angular/material/input';

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
    UpdateRoleComponent 
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
