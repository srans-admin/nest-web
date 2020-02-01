export class ComplaintComment{
   complaintId: number;
   resolutionStatus: string;
   resolutionDate: Date=new Date();
   comments: string = '';
   updatedByUserId: number;

   //Private Variables
   userpic:any;
   enableMyReply: boolean = false;
}
