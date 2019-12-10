import { Floor } from './floor';
import { Room } from './room';

export class Hostel {
   
  id: number ;
  hostelName: string = "Hostel-1";
  hostelAddress: string = "Hyderabad";
  hostelType: string = "Women";
  numOfFloors: number = 1;
  receptionUIImage: File ;
  floors : Array<Floor> = [];
  array: any;
  room : Room =new Room();

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

