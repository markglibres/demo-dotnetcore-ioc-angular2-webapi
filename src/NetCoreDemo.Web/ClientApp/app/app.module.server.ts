import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { sharedConfig } from './app.module.shared';
//as reported here: https://github.com/angular/angular/issues/14288
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        FormsModule,
        ReactiveFormsModule,
        ...sharedConfig.imports
    ]
})
export class AppModule {
}
