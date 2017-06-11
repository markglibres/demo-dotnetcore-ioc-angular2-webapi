import { Component, OnInit, Input  } from '@angular/core'
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { ActivatedRoute, Router, Params  } from '@angular/router';

@Component({
    selector: 'car',
    templateUrl: './vehicle.input.component.html',
    providers: [VehicleService ]
})

export class CarComponent implements OnInit {
        
    private _id: number;
    private sub: any;

    public vehicle: Vehicle;
    public options = {
        wheels: [4,6],
        doors: [2,4,5],
        bodytypes: ["Hatchback", "Sedan"]
    };

    constructor(private _vehicleService: VehicleService, private route: ActivatedRoute, private router: Router) {

        
        
    }

    ngOnInit() {

        //read param id
        this._id = this.route.snapshot.queryParams['id'];
      
        if (!this._id || this._id == 0) {
            this.vehicle = {
                Id: 0,
                Make: '',
                Model: '',
                Engine: '',
                Doors: 0,
                Wheels: 0,
                Category: '',
                BodyType: ''
            };
        } else {
            this._vehicleService.getById(this._id).subscribe(r => { this.vehicle = r; });
        }
        
    }

   

    save(model: Vehicle, isValid: boolean) {
        if (model.Id && model.Id > 0) {
            this._vehicleService.editCar(model).subscribe(r => console.log(r));
        }
        else {
            this._vehicleService.addCar(model).subscribe(r => console.log(r));
           
            //this.router.navigate(['/vehicle']);

        }
        //have some issues with router, not sure if a bug on VS 2017 templates
        //like similar issues to the  forms module: https://github.com/angular/angular/issues/14288
        //so for the meantime, let's use location.href
        location.href = '/vehicle';
       
    }

    cancel() {
        //have some issues with router, not sure if a bug on VS 2017 templates
        //like similar issues to the  forms module: https://github.com/angular/angular/issues/14288
        //so for the meantime, let's use location.href
        //this.router.navigate(['/vehicle']);
        location.href = '/vehicle';
    }

}
