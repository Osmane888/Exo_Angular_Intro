import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-output-shopping-list',
  templateUrl: './input-output-shopping-list.component.html',
  styleUrl: './input-output-shopping-list.component.scss'
})
export class InputOutputShoppingListComponent {

  @Input({required : true})
  itemsBis!: string[];

  @Output() deleteItemEvent = new EventEmitter<string>();

  deleteItemEmitter(item : string){
    this.deleteItemEvent.emit(item);
  }
}
