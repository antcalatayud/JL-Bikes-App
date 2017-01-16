import { Component, OnInit } from '@angular/core';
import { IBike } from './bike'

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  pageTitle: string = 'Prouct Detail';
  products: IBike;
  constructor() { }

  ngOnInit() {
  }

}