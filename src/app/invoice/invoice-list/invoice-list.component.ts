// import { InvoiceDetailsComponent } from './../invoice-details/invoice-details.component';
import { Observable } from "rxjs";
import { InvoiceService } from '../../invoice.service';
import { Invoice } from "../../invoice";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  expenses: Observable<Invoice[]>;

  constructor(private invoiceService: InvoiceService,
    private router: Router) {}



  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    // this.invoice = this.invoiceService.getInvoiceList();
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
  //   this.router.navigate(['edetails', id]);
  // }

  // updateExpense(id: number){
  //   this.router.navigate(['eupdate', id]);
  // }

}
