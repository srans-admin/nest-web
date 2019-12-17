import { Bed } from './bed';

export class Room{ 

    id: number;
    roomName: string; 
    roomType: string = "Single"; 
    roomRent: number = 2000; 
    beds : Array<Bed> = []; 
   
  }
  