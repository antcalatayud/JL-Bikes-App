import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import  {Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { IBike } from './bike';

@Injectable()
export class BikeService {
    private _bikesUrl = '../api/products/bikes.json';

    constructor(private _http : Http) { }

    getBikes(): Observable<IBike[]>{
        return this._http.get(this._bikesUrl)
                .map((response : Response) => <IBike[]> response.json()['items'])
                .catch(this.handleError);
    }

    getBike(id: number): Observable<IBike>{
        return this.getBikes()
        .map((bikes: IBike[]) => bikes.find(b => b.id === id))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    

}