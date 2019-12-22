import { Bed } from './Bed';

export class Room{ 

    id: number;
    roomName: string; 
    roomType: string; 
    roomRent: number; 
    beds : Array<Bed> = []; 
   
  }
  