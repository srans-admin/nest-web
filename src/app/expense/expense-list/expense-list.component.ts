import { ExpenseDetailsComponent } from './../expense-details/expense-details.component';
import { Observable } from "rxjs";
import { ExpenseService } from '../../_services/expense.service';
import { Expense } from "../../_models/expense";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.css"]
})
export class ExpenseListComponent implements OnInit {
  expenses: Observable<Expense[]>;
 public printPage()
  {
      //var data = document.getElementById('convertTo');
      html2canvas(document.body).then(canvas =>{
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL()
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth,imgHeight)
      pdf.save('File.pdf');
    });
  }

  constructor(private expenseService: ExpenseService,
    private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.expenses = this.expenseService.getExpensesList();
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  expenseDetails(id: number){
    this.router.navigate(['edetails', id]);
  }

  updateExpense(id: number){
    this.router.navigate(['eupdate', id]);
  }



}
