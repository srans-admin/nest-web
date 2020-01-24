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
    this.contactsList = this.contactsService.getContactsList(); 
  }

  ngOnInit() {
  }

}
