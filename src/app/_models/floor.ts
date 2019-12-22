import { Room } from './room';

export class Floor {
    id: number;
    floorName: string = "First"; 
    description: string = "";
    rooms : Array<Room> = []; 
  
    constructor(name: string = "First"){ 
      this.floorName = name;
    }
  } 
  