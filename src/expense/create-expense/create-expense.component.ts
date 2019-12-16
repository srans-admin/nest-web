import { ExpenseService } from '../../expense.service';
import { Expense } from '../../expense';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hostel } from '../../hostel';
import { HostelService } from '../../hostel.service';
import { Observable } from 'rxjs';
import { CategoryService } from '../../category.service';
import { Category } from "../../category";

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  categorys: Observable<Category[]>;

  constructor(private expenseService: ExpenseService,
    private router: Router) { }

      expense: Expense = new Expense();
    submitted = false;


  ngOnInit() {
  }

  newExpense(): void {
    this.submitted = false;
    this.expense = new Expense();
  }

  save() {
    this.expenseService.createExpense(this.expense)
      .subscribe(data => console.log(data), error => console.log(error));
    this.expense = new Expense();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/expenses']);
  }
}

