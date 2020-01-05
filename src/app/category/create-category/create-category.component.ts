import { CategoryService } from 'src/app/_services/category.service';
import { Category } from "../../_models/category";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {


  constructor(private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    private router: Router) { }

    category: Category = new Category();
    submitted = false;


  ngOnInit() {
  }

  newCategory(): void {
    this.submitted = false;
    this.category = new Category();
  }

  save() {
    this.categoryService.createCategory(this.category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = new Category();
    this.gotoList();
  }

  onSubmit() {
    this.dialogRef.close();
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['expenses/add']);
  }
}

