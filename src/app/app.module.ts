import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PaginatorComponent } from './modules/paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HomeComponent } from './modules/home/home.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { StatusIconsComponent } from './components/status-icons/status-icons.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    HomeComponent,
    FilterButtonComponent,
    StatusIconsComponent,
    // PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
