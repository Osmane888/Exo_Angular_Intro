import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { DeleteDialogComponent } from './demo-input-output/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoPipesComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
  ]
})
export class DemoModule { }
