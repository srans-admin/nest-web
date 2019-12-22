import { PipeTransform, Pipe } from '@angular/core';
import { Hostel } from '../_models/Hostel';

@Pipe({
    name: "hostelFilter"
})
export class HostelFilterPipe implements PipeTransform{
    transform(hostels: Hostel[], searchTerm: string) : Hostel[]{
        if(!hostels || !searchTerm){
            return hostels;
        }
        
        return hostels.filter(hostels => 
            hostels.hostelName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}