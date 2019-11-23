import { ExpenseDetailsComponent } from './../expense-details/expense-details.component';
import { Observable } from "rxjs";
import { ExpenseService } from '../../expense.service';
import { Expense } from "../../expense";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.css"]
})
export class ExpenseListComponent implements OnInit {
  expenses: Observable<Expense[]>;

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

  roleDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateExpense(id: number){
    this.router.navigate(['update', id]);
  }
}
