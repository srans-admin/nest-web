import { Room } from './room';

// export class Floor{
//     id: number;
//     description:string;
//     floor_name:string;
//     active: boolean;
// }


export class Floor {
    id: number;
    floorName: string = "First"; 
    rooms : Array<Room> = []; 
  
    constructor(name: string = "First"){ 
      this.floorName = name;
    }
  } 
  