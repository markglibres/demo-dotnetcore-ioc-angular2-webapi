import { Component, OnInit, Input  } from '@angular/core'
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { ActivatedRoute, Router, Params  } from '@angular/router';

@Component({
    selector: 'bike',
    templateUrl: './vehicle.input.component.html',
    providers: [VehicleService ]
})

export class BikeComponent implements OnInit {
        
    private _id: number;
    private sub: any;
    public _loading: boolean = false;
    public _errMsg: string;

    public vehicle: Vehicle;
    public options = {
        wheels: [2, 3, 4],
        doors: null,
        bodytypes: ["Road", "Off Road"]
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
                () => { this._loading = false; this._errMsg = null;}
            );
        }
        
    }
    
    save(model: Vehicle, isValid: boolean) {
        this._loading = true;
        if (model.Id && model.Id > 0) {
            this._vehicleService.editBike(model).subscribe(
                r => console.log(r),
                err => { this._errMsg = err; this._loading = false; },
                () => { this._loading = false; this._errMsg = null; this.router.navigate(['/vehicle']); }
            );
        }
        else {
            this._vehicleService.addBike(model).subscribe(
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

    populateDoorOptions() {
      
    }

}
