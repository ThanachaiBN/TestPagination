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
@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    HomeComponent,
    // PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
