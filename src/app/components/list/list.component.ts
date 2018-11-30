import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();

  handleDelete(theApt: object) {
    this.deleteEvt.emit(theApt);
  }
}
