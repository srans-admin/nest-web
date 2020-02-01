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

  public UserRegistrationSuccess = "Registration successfull, an email and SMS will be sent with initial login credentials. If not please approach complaints@srans.in";
  public UserRegistrationFailed = "User Registration failed ";

  public VacateRequestSuccess = "Your request sent successfully";
  public VacateRequestFailure = "Your request sent Failure, Please send request again..! Thank You.";

  public NotificationMessage = " Notifications";
  
}
