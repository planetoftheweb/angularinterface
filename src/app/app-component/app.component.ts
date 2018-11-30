import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Wisdom Pet Medicine';
  theList: object[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
    });
  }
}
