import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerPipe'
})
export class TimerPipePipe implements PipeTransform {

  transform(secondes: number): string {
    let minutes: number = Math.floor(secondes/ 60);
    let heures: number = Math.floor(minutes/60);
    secondes = secondes % 60;
    minutes = minutes % 60;
    heures = heures % 24;
    return `${heures.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${secondes < 10 ? '0' : ''}${secondes}`;
  }
}
