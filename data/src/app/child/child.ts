import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';

@Component({
  selector: 'app-child',
  imports: [CommonModule, CurrencyConvertorPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() user!:{id:number,name:string};

  @Output() getUsers = new EventEmitter<string[]>();
  peoples = ['tahsin', 'ferdous', 'rean', 'aziz'];

  loadData() {
    this.getUsers.emit(this.peoples);
  }

  title = 'child';

  date = new Date();

  amount = 10;
}
