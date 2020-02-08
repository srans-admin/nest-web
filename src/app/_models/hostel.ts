import { Floor } from './floor';
import { Room } from './room';

export class Hostel {
   
  private id: number ;
  private hostelName: string;
  private hostelAddress: string;
  private hostelType: string;
  tv : boolean;
  fridge : boolean;
  ac : boolean;
  mineralWater : boolean;
  parking : boolean;
  gym : boolean;
  numOfFloors: number;
  receptionUIImage: File ;
  floors : Array<Floor> = [];
  array: any;
  room: Room = new Room();
  selectedBedInfo:any;
  pic:any;
  adminId:number;

  // Adding Floors
  addFloors( numOfFloors: number){
    this.floors = [];
    for(let i = 0 ; i < numOfFloors; i++){
      this.floors.push(new Floor(""+(i+1)));
    }
  }

  // Adding Rooms
  addRoom(floorName, room: Room){
    
    for(let i=0; i < this.floors.length; i++ ){

        if(this.floors[i].floorName == floorName ){
          this.floors[i].rooms.push(room);
        }  
    } 
  }

}

