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
	productClasses :string[] = [];

  arr: Array<any>;

  constructor (private _bikeService : BikeService) {
    this.arr = new Array<any>();
    this.arr.push(new Element("aaa", "A"));
    this.arr.push(new Element("bbb", "A"));
    this.arr.push(new Element("bbb", "B"));
  }

  ngOnInit() {
		this.getBikes();
				
	  this.getProductClases();
  }

	getBikes():void{
			this._bikeService.getBikes()
				.subscribe(
                products => this.products = products,
					      error => this.errorMessage = <any>error
    );

	}

  getProductClases():void{	
     for (var item in BikeClasses) {
        if (BikeClasses.hasOwnProperty(item)) {
            this.productClasses.push(item);
        }
     }
  };
}

class Element {
  name: string;
  type: string;
  
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}