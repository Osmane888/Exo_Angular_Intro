import { Component } from '@angular/core';
import { Link } from '../../shared/models/link';
import {ExosComponent} from '../../exos/exos.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  links: Link[] = [
    {title : "Home" , url : "/home"},
    {title : "About", url : "/about"},
    {
      title : "Exos",
      isVisible: true,
      children : [
        {title : "Timer", url : "/exos/exo01"},
        {title : "ShoppingList-InputOutput", url: "/exos/exo02"},
      ]
    },
    {
      title : "Demos",
      isVisible: true,
      children : [
        {title: "Bindings", url: "/demos/demo01"},
        {title: "Pipes", url: "/demos/demo02"},
        {title: "Directives", url: "/demos/demo03"},
        {title: "Input-Output", url: "/demo/demo04"}
      ]
    }
  ]

  setVisibility(link : Link): void{
    if(!link.children){
      return;
    }
    for(let l of this.links){
      if(l !== link){
        l.isVisible = false;
      }
    }
    link.isVisible = !link.isVisible;
  }

}
