import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/models/product';
import {ChangeList} from '../../../shared/models/change-list';
import {ChangeTypeEnum} from '../../../shared/enums/change-type-enum';

@Component({
  selector: 'app-input-output-shopping-list',
  templateUrl: './input-output-shopping-list.component.html',
  styleUrl: './input-output-shopping-list.component.scss'
})
export class InputOutputShoppingListComponent {

  protected readonly ChangeTypeEnum = ChangeTypeEnum;

  @Input({required : true})
  items!: Product[];

  @Output()
  private changeList: EventEmitter<ChangeList> = new EventEmitter<ChangeList>();

  triggerChangeList(changeList : ChangeList){
    this.changeList.emit(changeList);
  }
}
