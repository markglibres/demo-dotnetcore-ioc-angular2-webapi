import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'vehicle',
    templateUrl: './vehicle.component.html',
    providers: [ VehicleService ]

})

export class VehicleComponent implements OnInit {
    public _vehicles: Vehicle[];
    public sub: any;
    public _loading: boolean = true;
    public _errMsg: string;

    constructor(private _vehicleService: VehicleService, private route: ActivatedRoute) {

        
    }

    ngOnInit() {
        this._loading = true;
        this.sub = this.route.params.subscribe(params => {
            //this.id = +params['id']; // (+) converts string 'id' to a number
            // Some 'reload' coding
            // In a real app: dispatch action to load the details here.
        }); 
        this._vehicleService.getListing().subscribe(
            vehicles => {
                this._vehicles = vehicles;
            },
            err => { this._loading = false; this._errMsg = err; },
            () => { this._loading = false; }

        );
        
    }

    withVehicles() {

        return this._vehicles && this._vehicles.length > 0;
    }
}

