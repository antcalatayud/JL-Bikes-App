import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

import { IBike } from './bike'
import { BikeService } from './bike.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  pageTitle: string = 'Bike Detail';
  bike: IBike;
  private sub: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _bikeService: BikeService) 
    { }

  ngOnInit():void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getBike(id);
      }
    )    
  }

  getBike(id:number){
    this._bikeService.getBike(id).subscribe(
      bike => this.bike = bike
    )
    console.log("1");
  }

}