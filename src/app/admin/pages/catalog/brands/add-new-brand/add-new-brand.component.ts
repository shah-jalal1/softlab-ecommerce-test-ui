import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-brand',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.scss']
})
export class AddNewBrandComponent implements OnInit {
  isLoading: any;
  autoSlug: any;
  dataForm: any;
  id: string;
  router: any;
  pickedImage: any;
  brand: any;

  constructor() { }

  ngOnInit(): void {
  }

  autoGenerateSlug() {

  }

  onSubmit() {

  }

  onHoldInputData() {

  }
}
