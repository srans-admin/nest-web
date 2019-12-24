import { Component, OnInit } from '@angular/core';
import { Expense } from '../../_models/expense';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../_services/expense.service';


@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {

  id: number;
  expense: Expense;

  constructor(private route: ActivatedRoute,private router: Router,
    private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expense = new Expense();

    this.id = this.route.snapshot.params['id'];

    this.expenseService.getExpense(this.id)
      .subscribe(data => {
        console.log(data)
        this.expense = data;
      }, error => console.log(error));
  }

  updateExpense() {
    this.expenseService.updateExpense(this.id, this.expense)
      .subscribe(data => console.log(data), error => console.log(error));
    this.expense = new Expense();
    this.gotoList();
  }

  onSubmit() {
    this.updateExpense();
  }

  gotoList() {
    this.router.navigate(['/expenses']);
  }
}

