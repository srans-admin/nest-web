import { Expense } from '../../_models/expense';
import { Component, OnInit, Input } from '@angular/core';
import { ExpenseService } from '../../_services/expense.service';
import { ExpenseListComponent } from '../expense-list/expense-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['expenses']);
  }
}
