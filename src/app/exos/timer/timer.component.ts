import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  secondes: number = 0;
  timer: any;

  timerStart(): void {
    if(this.timer){
      return;
    }
    this.timer = setInterval(() => this.secondsIncrement(), 1000);
  }

  timerPause(): void{
    if(!this.timer){
      return
    }
    clearInterval(this.timer);
    this.timer = null;
  }

  timerReset(): void{
    if(this.secondes<=0 && !this.timer){
      return;
    }
    this.timerPause();
    this.secondes = 0;
  }

  secondsIncrement(): void{
    this.secondes ++;
  }

}
