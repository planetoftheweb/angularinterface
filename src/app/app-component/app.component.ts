import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

library.add(faTimes, faPlus);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  theList: object[];
  modifiedList: object[];
  orderBy: string;
  orderType: string;

  addApt(theApt: object) {
    this.theList.unshift(theApt);
    this.modifiedList.unshift(theApt);
  }

  deleteApt(theApt: object) {
    this.theList = without(this.theList, theApt);
    this.modifiedList = without(this.theList, theApt);
  }

  searchApt(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        eachItem['petName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['ownerName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(theQuery.toLowerCase())
      );
    });
    this.sortItems();
  }

  sortItems() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }
    this.modifiedList.sort((a, b) => {
      if (
        a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()
      ) {
        return -1 * order;
      }

      if (
        a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()
      ) {
        return 1 * order;
      }
    });
  }

  constructor(private http: HttpClient) {
    this.orderBy = 'petName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
      this.modifiedList = data;
      this.sortItems();
    });
  }
}
