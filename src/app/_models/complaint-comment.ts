export class ComplaintComment{
   complaintId: number;
   resolutionStatus: string;
   resolutionDate: Date=new Date();
   comments: string;
   updatedByUserId: number
}
