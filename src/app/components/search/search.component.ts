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
  @Input() orderBy;
  @Input() orderType;
  @Output() queryEvt = new EventEmitter<string>();

  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }

  constructor() {}

  ngOnInit() {}
}
