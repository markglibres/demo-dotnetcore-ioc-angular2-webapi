import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class VehicleService {

    private vehicleServiceUrl: string;

    constructor(private http: Http) {

        this.vehicleServiceUrl = 'http://localhost:54677/api';
    }

    getListing() {
        return this.http.get(this.vehicleServiceUrl + '/vehicle').map(res => res.json());
    }
}