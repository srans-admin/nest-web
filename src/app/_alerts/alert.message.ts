import { Injectable } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertMessage {

  constructor(private toastr: ToastrService) { } 
  
  showSuccessMsg(message){
    this.toastr.success(message);
  }

  showFailedMsg(message){
    this.toastr.error(message);
  }

  showWarningMsg(message){
    this.toastr.warning(message);
  }


  showHTMLMessage(message, title){
	this.toastr.success(message, title, {
		enableHtml :  true
	})
  } 

    showSuccessWithTimeout(message, title, timespan){
        this.toastr.success(message, title ,{
            timeOut :  timespan
        })
    }
  
}
