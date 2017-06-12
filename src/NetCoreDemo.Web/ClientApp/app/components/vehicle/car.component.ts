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
    public _loading: boolean = false;
    public _errMsg: string;

    public vehicle: Vehicle;
    public options = {
        wheels: null,
        doors: [2,4],
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
            this._loading = true;
            this._vehicleService.getById(this._id).subscribe(
                r => { this.vehicle = r; },
                err => { this._errMsg = err; this._loading = false; },
                () => { this._loading = false; this._errMsg = null; console.log(this.vehicle.BodyType); }
            );

            
        }
        
    }
    
    save(model: Vehicle, isValid: boolean) {
        this._loading = true;
        if (model.Id && model.Id > 0) {
            this._vehicleService.editCar(model).subscribe(
                r => console.log(r),
                err => { this._errMsg = err; this._loading = false; },
                () => { this._loading = false; this._errMsg = null; this.router.navigate(['/vehicle']); }
            );
        }
        else {
            this._vehicleService.addCar(model).subscribe(
                r => console.log(r),
                err => { this._errMsg = err; this._loading = false; },
                () => { this._loading = false; this._errMsg = null; this.router.navigate(['/vehicle']); }
            );
           
            //this.router.navigate(['/vehicle']);

        }
        
       
    }

    cancel() {
       this.router.navigate(['/vehicle']);
       
    }

    populateDoorOptions(bodyType) {
        
        if (bodyType && bodyType.toLowerCase() == "hatchback") {
            this.options.doors = [2, 4];
        } else {
            this.options.doors = null;
        }
    }

}
