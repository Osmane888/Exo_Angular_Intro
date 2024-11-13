import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';
import {SharedModule} from "../shared/shared.module";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { InputOutputShoppingListComponent } from './shopping-list/input-output-shopping-list/input-output-shopping-list.component';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent,
    ShoppingListComponent,
    InputOutputShoppingListComponent,
  ],
    imports: [
        CommonModule,
        ExosRoutingModule,
        SharedModule,
    ]
})
export class ExosModule { }
