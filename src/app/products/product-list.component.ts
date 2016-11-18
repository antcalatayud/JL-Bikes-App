import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',  
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  products: any[] =[
		{
			"id": 1,
			"name": "Litening C:68",
			"description": "The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.",
			"image": {
				"thumb": "http://www.cube.eu/typo3temp/_processed_/csm_780500_overview_35318ff11c.png",
				"large": "http://www.cube.eu/typo3temp/_processed_/csm_780500_light_f65dc1ec5c.jpg"
			},
			"class": ["endurance", "race"]
		},
		{
			"id": 2,
			"name": "Litening C:62",
			"description": "A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.",
			"image": {
				"thumb": "http://www.cube.eu/typo3temp/_processed_/csm_779200_overview_4b6834c6f9.png",
				"large": "http://www.cube.eu/typo3temp/_processed_/csm_779200_light_a2e6307919.jpg"
			},
			"class": ["endurance", "race"]
		}
    ]
	
	productClass;

  constructor() { }

  ngOnInit() {
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