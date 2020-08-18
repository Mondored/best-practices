import { NgModule } from '@angular/core';
import { StockListComponent } from './stock-list.component';
import { StockDetailComponent } from './stock-detail.component';
import { RouterModule } from '@angular/router';
import { StockDetailGuard } from './stock-detail.guard';

@NgModule({
    declarations: [
        StockListComponent,
        StockDetailComponent
      ],
      imports: [
        RouterModule.forChild([
          { path: 'stock', component: StockListComponent },
          { path: 'stock/:id',
            canActivate: [StockDetailGuard],
            component: StockDetailComponent }
        ])
      ]
})
export class StockModule { }