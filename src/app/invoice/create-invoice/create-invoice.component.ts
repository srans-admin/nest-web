import { InvoiceService } from '../../_services/invoice.service';
import { Invoice } from '../../_models/invoice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService,
    private router: Router) { }

    invoice: Invoice = new Invoice();
    submitted = false;

  ngOnInit() {
  }

  newInvoice(): void {
    this.submitted = false;
    this.invoice = new Invoice();
  }

  save() {
    this.invoiceService.createInvoice(this.invoice)
      .subscribe(data => console.log(data), error => console.log(error));
    this.invoice = new Invoice();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/invoice']);
  }

}
