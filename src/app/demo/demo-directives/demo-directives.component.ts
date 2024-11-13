import { Component } from '@angular/core';
import {Trainer} from '../../shared/models/trainer';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {
  myColors: string[] = ["darkred", "darkgreen", "darkblue", "goldenrod"]
  myColor: string = "darkred";
  i: number = 0;

  isBold: boolean = false;
  isBig: boolean = false;
  isItalic: boolean = false

  isDayTime: boolean = true;

  trainers: Trainer[] = [
    {
      id: 1,
      firstName: 'Seb',
      lastName:'Bya',
      pictureUrl: 'seb.png',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Alexandre',
      lastName:'Kimtsaris',
      pictureUrl: 'alexandre.png',
      isActive: false,
    },
    {
      id: 3,
      firstName: 'Flavian',
      lastName:'Ovyn',
      pictureUrl: 'flavian.png',
      isActive: true,
    },
  ]

  constructor() {
    setInterval((): void => {
      this.myColor = this.myColors[this.i++ % this.myColors.length];
    }, 500);
  }

  toggleIsBold(){
    this.isBold = !this.isBold;
  }

  toggleIsBig(){
    this.isBig = !this.isBig;
  }

  toggleIsItalic(){
    this.isItalic = !this.isItalic;
  }

  toggleIsDayTime(): void{
    this.isDayTime = !this.isDayTime;
  }
}
