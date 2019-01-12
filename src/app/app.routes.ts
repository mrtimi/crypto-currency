import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './tickers/tickers.module#TickersModule',
    }
];