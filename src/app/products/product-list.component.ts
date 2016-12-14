import { Component, OnInit } from '@angular/core';

import { IBike } from './bikes/bike';
import { BikeClasses } from './bikes/bikeClasses.enum';
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

	selectionFilter: string;  
	productClass :string[];

  constructor (private _bikeService : BikeService) {}

  ngOnInit() {
		this.getBikes();
				
	  this.getProductClases();
  }

	getBikes(){
			this._bikeService.getBikes()
				.subscribe(
                products => this.products = products,
					      error => this.errorMessage = <any>error
    );

	}

  getProductClases(){	
  };
}
