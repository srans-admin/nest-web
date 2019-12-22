import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class NIDOSMessages {

  constructor() { }

  //Tenant related messages here
  public TenantCreationSuccess = "Tenant created successfully ";
  public TenantCreationFailed = "Tenant creation failed ";

  //Hostel related messages here
  public HostelCreationSuccess = "Hostel created successfully ";
  public HostelCreationFailed = "Hostel creation failed ";
  
}
