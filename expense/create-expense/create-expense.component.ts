import { ExpenseService } from '../../_services/expense.service';
import { Expense } from '../../_models/expense';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from "../../_models/category";
import { HostelService } from "../../_services/hostel.service";
import { Hostel } from "../../_models/hostel";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {
categorys: Observable<Category[]>;

  constructor(private expenseService: ExpenseService,
    private router: Router,
    public dialogbox:MatDialogRef<CreateExpenseComponent>) { }

      expense: Expense = new Expense();
    submitted = false;


  ngOnInit() {
  this.reloadData();
  }

  reloadData() {
    this.categorys = this.categoryService.getCategorysList();
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
  close(){
    this.dialogbox.close();
  }

}

