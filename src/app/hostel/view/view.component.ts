import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id : number;
  hostel : Hostel; 
  
  //https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4-5
  receptionImage: any;
  //isImageLoading: boolean = true; 

  constructor(private hostelService:HostelService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.hostel = new Hostel(); 
    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;
      }, error => console.log(error));


      this.hostelService.retriveFile('reception',this.id)
        .subscribe(data => { 
          this.createImageFromBlob(data);
          //this.isImageLoading = false;
          this.receptionImage = data;
        }, error => { 
          //this.isImageLoading = false; 
          console.log(error);
        });

     
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.receptionImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  list(){
    this.router.navigate(['/hostels']);
  }

}
