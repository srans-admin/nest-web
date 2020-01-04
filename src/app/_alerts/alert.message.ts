import { Injectable } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertMessage {
  success(arg0: string, arg1: boolean) {
    throw new Error("Method not implemented.");
  }
  error(error: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private toastr: ToastrService) { } 
  
  showSuccessMsg(message){
    this.toastr.success(message);
  }

  showHttpMessage(err){
    let errMsg = (err.url)? 'URL : '+err.url : '';
        errMsg+= (err.ok)? '\nOK : '+err.ok : '';
        errMsg+= (err.error)? '\nMessage : '+err.error.message: '';
    this.toastr.error(errMsg);
  }

  showFailedMsg(message){
    this.toastr.error(message);
  }

  showWarningMsg(message){
    this.toastr.warning(message);
  }


  showHTMLMessage(title, message ){
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
