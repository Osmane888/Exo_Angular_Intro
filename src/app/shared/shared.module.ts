import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import {TempPipe} from './pipes/temp.pipe';
import { TimerPipePipe } from './pipes/timer-pipe.pipe';
import {Link} from './models/link';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe,
    TimerPipePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    TempPipe,
    TimerPipePipe,
  ]
})
export class SharedModule { }
