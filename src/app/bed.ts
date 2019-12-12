export class Bed {
    id: number;
    roomType: string = "Single"; // Single, Double, Triple & Misc
    bedNumber: string = '101';
    position: string = "Left"; // Left, Right & Middle
    alloted: string = "Y"; // Yes, No & Reserved
    vacatedDate: Date;
    allotedDate: Date;
  }