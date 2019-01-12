import { Routes } from '@angular/router';
import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { TickerDetailComponent } from './components/ticker-detail/ticker-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: TickersListComponent
    },
    {
        path: 'ticker/:id',
        component: TickerDetailComponent
    }
];