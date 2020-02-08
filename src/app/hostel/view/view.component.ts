import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hostel } from '../../_models/hostel';
import { HostelService } from '../../_services/hostel.service';
import { Room } from 'src/app/_models/room';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private hostels: Observable<Hostel[]>;

  // variables declaration
  private id : number;
  private hostel : Hostel;
  private room : Room = new Room(); 
  private receptionImage: any;
  private facadeImage: any;
  private b1Image: any;
  private b2Image: any;
  private b3Image: any;
  private miscImage: any;
  private currentUser: User;
  private temp : number = 0;
  private rooms : number;
  private beds : number;

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
              private authenticationService: AuthenticationService,
              private router: Router) { 
                this.currentUser = this.authenticationService.currentUser;
              }

  ngOnInit() {
    this.hostel = new Hostel(); 
    this.id = this.route.snapshot.params['id'];
    
    this.hostelService.getHostel(this.id)
      .subscribe(data => {
        console.log(data)
        this.hostel = data;

        for(let i = 0; i < this.hostel.floors.length; i++){
          this.rooms = this.hostel.floors[i].rooms.length;
          this.temp = this.temp + this.rooms;
        }        
        this.rooms = this.temp;        
 

        // for(this.i = 0; this.i < this.hostel.floors.length;this.i++){
          for(let j = 0; j < this.rooms[j].beds.length; j++){
            this.beds = this.rooms[j].beds.length;
            this.temp = this.temp + this.beds;
          }
        // }

        // console.log(this.hostel.floors[0].rooms[4].beds.length);
        // for(this.j = 0;this.j < this.hostel.floors[this.j].rooms[this.i].beds.length;this.j++){
        //   this.beds = this.hostel.floors[this.j].rooms[this.j].beds.length;
        //   this.temp = this.temp + this.beds;
        // }
        console.log(this.temp);
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
        this.b3Image = data;
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

//bed 1
createImageFromBlobB1(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.b1Image = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//bed 2
createImageFromBlobB2(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.b2Image = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}

//bed 3
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

  // delete hostel
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

  // edit hostel
  updateHostel(id: number){
    console.log(id);
    this.router.navigate(['update', id]);
  }

  // hostels list
  listHostel(){
    this.router.navigate(['/hostels']);
  }

  reloadData() {
    this.hostels = this.hostelService.getHostelsList(this.currentUser.userId, this.currentUser.role);      
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
