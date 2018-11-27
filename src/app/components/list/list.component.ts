import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  whichApt: object;
  @Input() sortedList;
  @Input() query;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(theApt: object) {
    this.whichApt = theApt;
    this.deleteEvt.emit(theApt);
  }

  handleUpdate(theApt: object, labelName: string, newValue: string) {
    this.whichApt = theApt;
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue
    });
  }

  constructor() {}

  ngOnInit() {}
}
