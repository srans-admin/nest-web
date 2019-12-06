import { Floor } from './floor';
import { Room } from './room';

export class Hostel {
   
  id: number ;
  hostelName: string = "Hostel-1";
  hostelAddress: string = "Hyderabad";
  hostelType: string = "Women";
  numOfFloors: number = 1;

  floors : Array<Floor> = [];
  floorName : string;
  
  roomName : number;
  roomType : string;
  roomRent : number;
  
  tv : string;
  fridge : string;
  ac : string;
  mineralWater : string;
  parking : string;
  gym : string;

  facade : string;
  reception : string;
  bed1 : string;
  bed2 : string;
  bed3 : string;
  miscellaneous : string;

  addRoom(floorName, room: Room){
    
    for(let i=0; i<this.floors.length; i++ ){

        if(this.floors[i].floorName == floorName ){
          this.floors[i].rooms.push(room);
        }  
    } 
  }

  addFloors( numOfFloors: number){

    this.floors = [];
    for(let i = 0 ; i < numOfFloors; i++){
      this.floors.push(new Floor(""+(i+1)));
    }
  }


}

