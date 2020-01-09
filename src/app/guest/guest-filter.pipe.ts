import { PipeTransform, Pipe } from '@angular/core';
import { Guest } from '../_models/guest';

@Pipe({
    name: "guestFilter"
})
export class GuestFilterPipe implements PipeTransform{
    transform(guests: Guest[], searchTerm: string) : Guest[]{
        if(!guests || !searchTerm){
            return guests;
        }
        
        return guests.filter(guest => 
            guest.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            // user.userId.toLowerCase().indexof(searchTerm.toLowerCase()) !== -1);
    }
}