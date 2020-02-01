// import { User } from './user';
export class Payment{
    id: number;
    userId: number;
    date: Date = new Date();
    roomName: string;
    roomType: string;
    paymentThrough: string;
    transactionId: number;
    bankName: string;
    roomRent: number;
    depositAmount: number;
    discountAmount:number = 0;
    amountPaid : number;
    adminId: number;

    // user: User = new User();
}