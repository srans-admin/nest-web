import { Room } from './Room';

export class Floor {
    id: number;
    floorName: string = "First"; 
    description: string = "";
    rooms : Array<Room> = []; 
  
    constructor(name: string = "First"){ 
      this.floorName = name;
    }
  } 
  