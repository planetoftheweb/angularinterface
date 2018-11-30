import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

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
