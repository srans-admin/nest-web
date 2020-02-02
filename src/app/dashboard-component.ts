import { Component } from '@angular/core';

@Component({ 
  })
export class DashboardComponent {

protected selectedItemId : string = "PR";

constructor(){}

selectMe(event){  
    this.selectedItemId = event.srcElement.id;
    //event.srcElement.classList.add('active');
    }

}