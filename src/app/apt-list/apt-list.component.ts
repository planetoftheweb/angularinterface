import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apt-list',
  templateUrl: './apt-list.component.html',
  styleUrls: ['./apt-list.component.css'],
  inputs: ['aptList']
})
export class AptListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
