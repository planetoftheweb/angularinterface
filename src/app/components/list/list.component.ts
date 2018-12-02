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
  whichApt: object;

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(theApt: object) {
    this.deleteEvt.emit(theApt);
  }
}
