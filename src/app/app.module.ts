import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { SearchComponent } from './Component/search/search.component';
import { TableComponent } from './Component/table/table.component';
import { CashMemoComponent } from './Component/cash-memo/cash-memo.component';
import { ButtonGorupComponent } from './Component/button-gorup/button-gorup.component';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    TableComponent,
    CashMemoComponent,
    ButtonGorupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
