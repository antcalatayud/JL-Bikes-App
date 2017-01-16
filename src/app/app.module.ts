import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';

import { BikeService } from './products/bikes/bike.service'
import { BikeDetailComponent } from './products/bikes/bike-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BikeDetailComponent,
    WelcomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
