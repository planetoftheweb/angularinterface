import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app-component/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
