import { Component, OnInit } from '@angular/core';
// import {resolveAny} from "dns";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  dataTypeFormat: any;
  productsPerPage: string | number;
  categories: any;
  currentPage: string | number;
  totalProducts: string | number;
  constructor() { }

  ngOnInit(): void {
  }

  exportDataToFile() {

  }

  onPageChanged($event: any) {

  }

  openConfirmDialog(_id: any) {

  }
}
