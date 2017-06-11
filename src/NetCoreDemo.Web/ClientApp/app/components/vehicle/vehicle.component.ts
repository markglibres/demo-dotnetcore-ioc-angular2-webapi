import { Component, Inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
    selector: 'vehicle',
    templateUrl: './vehicle.component.html',
    providers: [ VehicleService ]

})

export class VehicleComponent {
    public vehicles: Vehicles[];

    constructor(private vehicleService: VehicleService) {

        this.vehicleService.getListing().subscribe(vehicles => {
            this.vehicles = vehicles;
        });
    }
}

interface Vehicles {
    id: number;
    make: string;
    model: string;
    engine: string;
    doors: number;
    wheels: number;
    category: string;
    bodyType: string;

}