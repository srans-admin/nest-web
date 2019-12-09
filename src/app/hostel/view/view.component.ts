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
  
  receptionImage: any;
  facadeImage: any;
  b1Image: any;
  b2Image: any;
  b3Image: any;
  miscImage: any;
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

      //Reception
      this.hostelService.retriveFile('reception',this.id)
        .subscribe(data => { 
          this.createImageFromBlob(data);
          //this.isImageLoading = false;
          this.receptionImage = data;
        }, error => { 
          //this.isImageLoading = false; 
          console.log(error);
        });

      //Facade  
      this.hostelService.retriveFile('facade', this.id)
        .subscribe(data => {
        this.createImageFromBlobFacade(data);
        this.facadeImage = data;
        }, error => {
          console.log(error);
      })

      //B1 Image
      this.hostelService.retriveFile('b1', this.id)
        .subscribe(data => {
        this.createImageFromBlobB1(data);
        this.b1Image = data;
        }, error => {
          console.log(error);
      })

      //B2 Image
      this.hostelService.retriveFile('b2', this.id)
        .subscribe(data => {
        this.createImageFromBlobB2(data);
        this.b2Image = data;
        }, error => {
          console.log(error);
      })

      //B3 Image
      this.hostelService.retriveFile('b3', this.id)
        .subscribe(data => {
        this.createImageFromBlobB3(data);
        this.facadeImage = data;
        }, error => {
          console.log(error);
      })

      //Misc Image
      this.hostelService.retriveFile('misc', this.id)
        .subscribe(data => {
        this.createImageFromBlobMisc(data);
        this.miscImage = data;
        }, error => {
          console.log(error);
      })
  }



  
  //Reception
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.receptionImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 //Facade
 createImageFromBlobFacade(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.facadeImage = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//Bed 1
createImageFromBlobB1(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.b1Image = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//Bed 2
createImageFromBlobB2(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.b2Image = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//Bed 3
createImageFromBlobB3(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.b3Image = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//Misc
createImageFromBlobMisc(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.miscImage = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

  list(){
    this.router.navigate(['/hostels']);
  }

}
