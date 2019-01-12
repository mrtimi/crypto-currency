import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatProgressSpinnerModule, MatDividerModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { TickerDetailComponent } from './components/ticker-detail/ticker-detail.component';
import { TickerComponent } from './components/tickers-list/ticker/ticker.component';
import { RouterModule } from '@angular/router';
import { routes } from './tickers.routes';

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
    MatButtonModule
  ]
})
export class TickersModule { }