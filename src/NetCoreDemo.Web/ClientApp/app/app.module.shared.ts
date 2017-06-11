import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { BikeComponent } from './components/vehicle/bike.component';
import { CarComponent } from './components/vehicle/car.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        VehicleComponent,
        BikeComponent,
        CarComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'vehicle', component: VehicleComponent },
            { path: 'bike', component: BikeComponent },
            { path: 'bike/:id', component: BikeComponent },
            { path: 'car', component: CarComponent },
            { path: 'car/:id', component: CarComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};

