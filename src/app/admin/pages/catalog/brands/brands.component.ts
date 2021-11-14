import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  dataTypeFormat: any;
  brands: any;
  productsPerPage: string | number;
  currentPage: string | number;
  totalProducts: string | number;

  constructor() { }

  ngOnInit(): void {
  }

  exportDataToFile() {

  }

  onFileChange($event: Event) {

  }

  onPageChanged($event: number) {

  }
}
