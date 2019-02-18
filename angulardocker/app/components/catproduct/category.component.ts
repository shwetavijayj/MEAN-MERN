import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category, Categories } from './category.model';

@Component({
    selector: 'category-data',
    templateUrl: './category.html'
})
export class CategoryComponent implements OnInit {
    categories = Categories;
    categoryName: string;
    cnt: number = 0;
    constructor(private cd: ChangeDetectorRef) {
        this.categoryName = "";

    }
    selectCategory(c: any) {
        console.log("c", c.categoryName);
        this.categoryName = c.categoryName
    }
    public getVal(e: any) {
        console.log("event" + e);
        this.cnt = e;
    }

    ngOnInit() { }
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
}