import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../_models/user';

@Pipe({
    name: "userFilter"
})
export class UserFilterPipe implements PipeTransform{
    transform(users: User[], searchTerm: string) : User[]{
        if(!users || !searchTerm){
            return users;
        }
        
        return users.filter(users =>
            users.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            // user.userId.toLowerCase().indexof(searchTerm.toLowerCase()) !== -1);
    }
}
