import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';

library.add(faTimes);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  query: string;
  lastIndex: number;
  aptList: object[];
  sortedList: object[];
  currentApt: object;
  orderBy: string;
  orderType: string;

  deleteApt(theApt: object, index: number) {
    this.aptList = without(this.aptList, theApt);
    this.sortedList = without(this.sortedList, theApt);
  }

  addApt(theApt: object) {
    this.query = '';
    this.orderBy = 'aptDate';
    this.orderType = 'desc';
    this.aptList.unshift(theApt);
    this.sortedList = this.aptList;
  }

  updateApt(aptInfo) {
    let aptIndex: number;
    let sortedIndex: number;

    aptIndex = findIndex(this.aptList, {
      aptId: aptInfo.theApt.aptId
    });
    sortedIndex = findIndex(this.sortedList, {
      aptId: aptInfo.theApt.aptId
    });

    this.aptList[aptIndex][aptInfo.labelName] = aptInfo.newValue;
    this.sortedList[sortedIndex][aptInfo.labelName] =
      aptInfo.newValue;
  }

  searchApt(theQuery: string) {
    this.query = theQuery;

    this.sortedList = this.aptList.filter(eachItem => {
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

    this.sortItems(this.sortedList, this.orderBy, this.orderType);
  }

  orderApt(orderObj) {
    this.orderBy = orderObj.orderBy;
    this.orderType = orderObj.orderType;

    this.sortItems(
      this.sortedList,
      orderObj.orderBy,
      orderObj.orderType
    );
  }

  sortItems(items: object[], orderBy: string, orderType: string) {
    let order: number;
    if (orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }
    items.sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order;
      }

      if (a[orderBy].toLowerCase() > b[orderBy].toLowerCase()) {
        return 1 * order;
      }
    });
  }

  constructor(private http: HttpClient) {
    this.query = '';
    this.orderBy = 'petName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.lastIndex = 0;
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.aptList = data;
      this.aptList = this.aptList.map((item: any) => {
        item.aptId = this.lastIndex++;
        return item;
      });
      this.sortedList = this.aptList;
      this.sortItems(this.sortedList, this.orderBy, this.orderType);
    });
  }
}
