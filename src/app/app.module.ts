import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';

import { BikeService } from './products/bikes/bike.service'
import { BikeDetailComponent } from './products/bikes/bike-detail.component';
import { BikeGuardService } from './products/bikes/bike-guard.service';


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
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'bike/:id', component: BikeDetailComponent, canActivate:[BikeGuardService]},
      {path: 'home', component: WelcomeComponent},
      {path: '**', redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [BikeService, BikeGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
