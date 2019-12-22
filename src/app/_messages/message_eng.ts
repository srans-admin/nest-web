import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class NIDOSMessages {

  constructor() { }

  public TenantCreationSuccess = "Tenant Created succssfully";
  public TenantCreationFailed = "Tenant creation failed";
  
}
