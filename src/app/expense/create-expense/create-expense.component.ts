import { ExpenseService } from '../../_services/expense.service';
import { Expense } from '../../_models/expense';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from "../../_models/category";
import { HostelService } from "../../_services/hostel.service";
import { Hostel } from "../../_models/hostel";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent} from "../../category/create-category/create-category.component";
import { AuthenticationService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {
  private categories: Observable<Category[]>;
  private  hostels: Observable<Hostel[]>;
  private expense: Expense = new Expense();
  private submitted = false;
  private addedCategoryType: Category = null;
  private currentUser: User;


  constructor(private expenseService: ExpenseService,
              private categoryService: CategoryService,
              private router: Router,
              public dialog: MatDialog,
              private hostelService: HostelService,
              private httpClient: HttpClient,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute) { 
                this.currentUser = this.authenticationService.currentUser;
              }


  ngOnInit() {
       this.filterForeCasts();
       this.reloadData();
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


   filterForeCasts(){
    this.hostels = this.hostelService.getHostelsList(this.currentUser.userId, this.currentUser.role);
  }

   reloadData() {
    this.categories = this.categoryService.getCategorysList();
  }


  addCategory(){

    const dialogRef = this.dialog.open(CreateCategoryComponent, {
          width: '40%',
          height: '40%',
          data: {
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        }
refreshPage(){
    window.location.reload();
}
}

