import {Component} from '@angular/core';
import {Product} from '../../shared/models/product';
import {ChangeList} from '../../shared/models/change-list';
import {ChangeTypeEnum} from '../../shared/enums/change-type-enum';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  items: Product[] = [
    {name: "Diamond DA-40", quantity: 7},
    {name: "Static", quantity: 3},
    {name: "PlayStation 5", quantity: 4},
    {name: "Television", quantity: 2},
    {name: "Macbook", quantity: 1},
  ];

  itemSelected: string | undefined;
  itemToAdd: string = '';
  itemQuantity: number = 1;

  selectItem(item : string){
    this.itemSelected = item;
  }

  addItem(): void {
    if(this.itemToAdd.trim() == '' || this.itemQuantity < 1){
      return;
    }
    this.items.push({name : this.itemToAdd, quantity: this.itemQuantity});
    this.itemToAdd = '';
    this.itemQuantity = 1;
  }

  reactToChangeList(changeList: ChangeList){
    switch(changeList.changeType){
      case ChangeTypeEnum.UP:
        this.items[changeList.index].quantity ++;
        break;
      case ChangeTypeEnum.DOWN:
        this.items[changeList.index].quantity --;
        if(this.items[changeList.index].quantity <= 0){
          this.items.splice(changeList.index, 1);
        }
        break;
      case ChangeTypeEnum.REMOVE:
        this.items.splice(changeList.index, 1);
        break;
    }
  }
}
