import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../_models/User';

@Pipe({
    name: "userFilter"
})
export class UserFilterPipe implements PipeTransform{
    transform(users: User[], searchTerm: string) : User[]{
        if(!users || !searchTerm){
            return users;
        }
        
        return users.filter(user => 
            user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}