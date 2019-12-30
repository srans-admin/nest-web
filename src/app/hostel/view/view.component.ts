import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../_models/hostel';
import { HostelService } from '../../_services/hostel.service';
import { Room } from 'src/app/_models/room';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FloorViewComponent } from '../floor-view/floor.view.component';
import { AddHostelComponent } from '../add-hostel/add-hostel.component';
import { AddFloorRoomComponent } from '../add-floor-room/add-floor-room.component';
import { Floor } from 'src/app/_models/floor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  hostels: Observable<Hostel[]>;

  // variables declaration
  id : number;
  hostel : Hostel;
  room : Room = new Room(); 
  receptionImage: any;
  facadeImage: any;
  b1Image: any;
  b2Image: any;
  b3Image: any;
  miscImage: any;

  donutInfo = {

    "single" :{
      "sharingType": "Single Sharing Type",
      "data":[20,30,40]
    },
    "double" :{
      "sharingType": "Double Sharing Type",
      "data":[30,30,33]
    },
    "triple" :{
      "sharingType": "Triple Sharing Type",
      "data":[50,30,44]
    },
     "misc" :{
      "sharingType": "Misc Sharing Type",
      "data":[70,20,45]
    }
  }

  barchartInfo ={
    "name" : "Joining Trends"
  };
  
  //isImageLoading: boolean = true; 

  constructor(private hostelService:HostelService, 
              private route: ActivatedRoute, 
              private router: Router,
              private dialog: MatDialog) { }

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

  deleteHostel(id: number) {
    if(window.confirm("Are you to remove the hostel : "+id)){
    this.hostelService.deleteHostel(id)
      .subscribe(
        data => {
          console.log(data);  
          this.reloadData();
        },
        error => console.log(error));
      }
      this.listHostel();
  }

  listHostel(){
    this.router.navigate(['/hostels']);
  }

  reloadData() {
    this.hostels = this.hostelService.getHostelsList();      
  }

  changeLanguage(language) {
    var element = document.getElementById("url");
    element.innerHTML = language;
  }

  showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  //  Close the dropdown if the user clicks outside of it
  @HostListener('document:click', ['$event'])
   click = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
  } 
  
}
