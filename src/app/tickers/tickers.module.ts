import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatGridListModule, 
  MatProgressSpinnerModule,
  MatDividerModule,
  MatToolbarModule,
  MatButtonModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule, } from '@angular/flex-layout';

import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { TickerDetailComponent } from './components/ticker-detail/ticker-detail.component';
import { TickerComponent } from './components/tickers-list/ticker/ticker.component';
import { RouterModule } from '@angular/router';
import { routes } from './tickers.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TickersListComponent,
    TickerDetailComponent,
    TickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class TickersModule { }
