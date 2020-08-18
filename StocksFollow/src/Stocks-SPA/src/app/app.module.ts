import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockModule } from './stocks/stock.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    StockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
