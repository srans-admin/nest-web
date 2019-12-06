import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../hostel.service";
import { Hostel } from "../../hostel";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.css']
})
export class ListHostelComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  
  constructor(private hostelService: HostelService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.hostels = this.hostelService.getHostelsList();
    }
  
    deleteHostel(id: number) {
      this.hostelService.deleteHostel(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    hostelDetails(id: number){
      this.router.navigate(['details', id]);
    }
  
    updateHostel(id: number){
      this.router.navigate(['update', id]);
    }

    listHostel(id: number){
      this.router.navigate(['floor', id]);
    }

    changeLanguage(language: any) {
      var element = document.getElementById("url");
      element.value = language;
      element.innerHTML = language;
  }

  showDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  onclick = function(event) {
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
  

  