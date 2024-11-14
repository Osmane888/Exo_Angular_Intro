import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoService} from '../shared/services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy, OnInit{


  constructor(private readonly _demoService: DemoService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void{
  }

}
