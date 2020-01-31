import { Component, OnInit } from '@angular/core';
import { VacateService } from '../../_services/vacate.service';
import { AuthenticationService } from '../../_auth/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrls: ['./approve-request.component.css']
})
export class ApproveRequestComponent implements OnInit {

  private currentUser : User;

  constructor(private vacateService: VacateService,
              private authenticationService: AuthenticationService) {
                this.currentUser = this.authenticationService.currentUser;
               }

  ngOnInit() {
  }

  grantApprove(){
    this.vacateService.putVacateRequest(this.currentUser.userId).subscribe(res => {
        console.log(res);
    });
  }

}
