import { Component, Input } from '@angular/core';
import { Ticker } from 'src/app/tickers/models/ticker';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent  {
  @Input()
  ticker : Ticker

}
