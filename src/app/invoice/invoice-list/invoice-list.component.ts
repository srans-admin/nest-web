// import { InvoiceDetailsComponent } from './../invoice-details/invoice-details.component';
import { Observable } from "rxjs";
import { InvoiceService } from '../../_services/invoice.service';
import { Invoice } from "../../_models/Invoice";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { User, TmpUsr } from "../../_models/User";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
        invoices: Observable<Invoice[]>;

  constructor(private invoiceService: InvoiceService,
    private router: Router) {}



  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.invoices = this.invoiceService.getInvoicesList();
  }
  

  // deleteInvoice(id: number) {
  //   this.invoiceService.deleteInvoice(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // invoiceDetails(id: number){
  //   this.router.navigate(['invoicedetails', id]);
  // }

  // updateInvoice(id: number){
  //   this.router.navigate(['invoiceupdate', id]);
  // }

}
