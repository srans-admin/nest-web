import { TenantBooking } from './tenant-booking';
import { Payment } from './payment';

export class Guest {
    userId: number;
    userpic: File;
    name: string;
    contactNumber: number;
    fatherName: string;
    fatherphoneNumber: number;
    motherName: string;
    motherphoneNumber: number;
    dob: string;
    bloodGroup: string;
    emergencyContactNumber: number;
    nameOfTheEmployer: string;
    officeAddress: string;
    telephoneNumber: number;
    emailId: string;
    permanentAddress: string;
    idProofpic: string; 


tenantBooking: TenantBooking = new TenantBooking();
  payment: Payment = new Payment();

}

export class TmpGst{
    userId;
    pic:any;
  }