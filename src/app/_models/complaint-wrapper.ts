import { Complaint } from './complaint';
import { ComplaintComment } from './complaint-comment';

export class ComplaintWrapper{
  complaint: Complaint;
  complaintComments: Array<ComplaintComment> = [];
  myComplaintComment: ComplaintComment = new ComplaintComment();
}
