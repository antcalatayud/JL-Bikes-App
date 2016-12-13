import { Component, OnInit } from '@angular/core';

import { IBike } from './bikes/bike';
import { BikeService } from './bikes/bike.service'

@Component({
  selector: 'app-product-list',  
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  products: IBike[];
	errorMessage: string;
  
	productClass;

  constructor (private _bikeService : BikeService) {}

  ngOnInit() {
		this._bikeService.getBikes()
				.subscribe(
                products => this.products = products['items'],
					      error => this.errorMessage = <any>error
    );
				
	  this.getProductClases();
  }

  getProductClases(){
		this.productClass = [
		{
			"id" : 1,
			"name": "endurance"
		},
		{
			"id" : 1,
			"name": "race"
		},
		{
			"id" : 3,
			"name": "confort"
		}
	]
  };
}
