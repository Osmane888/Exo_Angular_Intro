import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  items: string[] = [
    "Tournevis",
    "Pelle",
    "PlayStation 5",
    "Static",
    "Pomme",
  ];

  itemSelected: string | undefined;
  itemToAdd: string = '';

  selectItem(item : string){
    this.itemSelected = item;
  }

  addItem(): void {
    if(this.itemToAdd.trim() == ''){
      return;
    }
    this.items.push(this.itemToAdd);
    this.itemToAdd = '';
  }

  deleteItem(item: string): void{
   this.items.splice(this.items.indexOf(item),1);
  }
}
