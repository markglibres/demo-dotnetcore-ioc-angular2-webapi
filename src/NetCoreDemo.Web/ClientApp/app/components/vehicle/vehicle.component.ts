import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
    selector: 'vehicle',
    templateUrl: './vehicle.component.html',
    providers: [ VehicleService ]

})

export class VehicleComponent implements OnInit {
    public _vehicles: Vehicle[];

    constructor(private _vehicleService: VehicleService) {

        
    }

    ngOnInit() {
        this._vehicleService.getListing().subscribe(vehicles => {
            this._vehicles = vehicles;
        });
        
    }
}

