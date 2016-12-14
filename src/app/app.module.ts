import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { BikeService } from './products/bikes/bike.service'
import { BikeClassFilterPipe } from './products/bikes/bike-class-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BikeClassFilterPipe
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
