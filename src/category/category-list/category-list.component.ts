import { CategoryDetailsComponent } from './../category-details/category-details.component';
import { Observable } from "rxjs";
import { CategoryService } from '../../category.service';
import { Category } from "../../category";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"]
})
export class CategoryListComponent implements OnInit {
  categorys: Observable<Category[]>;

  constructor(private categoryService: CategoryService,
    private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categorys = this.categoryService.getCategorysList();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  categoryDetails(id: number){
    this.router.navigate(['cdetails', id]);
  }

  updateCategory(id: number){
    this.router.navigate(['cupdate', id]);
  }
}

