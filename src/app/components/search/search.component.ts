import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Input() query;
  @Input() orderBy;
  @Input() orderType;

  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter<object>();

  handleQuery(value: string) {
    this.queryEvt.emit(this.query);
  }

  handleSort(orderItems) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEvt.emit(orderItems);
  }

  constructor() {}

  ngOnInit() {}
}
