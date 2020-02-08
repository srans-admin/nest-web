// import { User } from './user';
export class Payment{
    id: number;
    userId: number;
    paidDate: Date = new Date();
    roomName: string;
    roomType: string;
    paymentThrough: string;
    transactionId: number;
    bankName: string;
    roomRent: number;
    depositAmount: number;
    discountAmount:number = 0;
    amountToBePaid : number;
    sharing: string;
    adminId: number;

    // user: User = new User();
}
