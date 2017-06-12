import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Vehicle } from '../interfaces/vehicle.interface';


@Injectable()

export class VehicleService {

    private vehicleServiceUrl: string;
    public result: Vehicle;

    constructor(private http: Http) {

        //this.vehicleServiceUrl = 'http://localhost:54677/api';
        this.vehicleServiceUrl = 'http://markg-dotnetcoredemo-api.azurewebsites.net/api';
    }

    getListing() {
        return this.http.get(this.vehicleServiceUrl + '/vehicle').map(res => res.json());
    }

    getById(id) {
        return this.http.get(this.vehicleServiceUrl + '/vehicle/'+id).map(res => res.json());
    }

    addBike(model: Vehicle) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.http.post(this.vehicleServiceUrl + '/bike', JSON.stringify(model), { headers: headers }).map(res => res.json());
    }

    editBike(model: Vehicle) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this.vehicleServiceUrl + '/bike/'+model.Id, JSON.stringify(model), { headers: headers }).map(res => res.json());
    }

    addCar(model: Vehicle) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        model.Wheels = 4;
        if (model.BodyType.toLowerCase() == 'sedan') {
            model.Doors = 4;
        } 

        return this.http.post(this.vehicleServiceUrl + '/car', JSON.stringify(model), { headers: headers }).map(res => res.json());
    }

    editCar(model: Vehicle) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        model.Wheels = 4;
        if (model.BodyType.toLowerCase() == 'sedan') {
            model.Doors = 4;
        } 

        return this.http.put(this.vehicleServiceUrl + '/car/' + model.Id, JSON.stringify(model), { headers: headers }).map(res => res.json());
    }
    
}