import { User } from '../../user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;
  userpicImage: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));

      this.userService.retriveFile('userpic',this.id)
        .subscribe(data => { 
          this.createImageFromBlob(data);
          //this.isImageLoading = false;
          this.userpicImage = data;
        }, error => { 
          //this.isImageLoading = false; 
          console.log(error);
        });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.userpicImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  list(){
    this.router.navigate(['user']);
  }

}
