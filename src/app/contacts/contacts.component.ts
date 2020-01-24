import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private contactsList: any;

  constructor(private contactsService: ContactsService) { 
    console.log('at contacts..');
    this.contactsService.getContactsList().subscribe(res => { 
      this.contactsList = res;
    },err =>{ 
      //this.alertMessage.showHttpMessage(err);
      console.log('Unable to get contatcs');
    });
  }

  ngOnInit() {
   
  }

}
