import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TickersService } from '../../services/tickers.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ticker-detail',
  templateUrl: './ticker-detail.component.html',
  styleUrls: ['./ticker-detail.component.css']
})
export class TickerDetailComponent implements OnInit {
  ticker : Object;
  loading : boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tickerServices: TickersService
  ) { }


  ngOnInit() {
    const getTicker = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tickerServices.getTickerById(params.get('id')))
    );
    getTicker.subscribe(_ticker =>{
      this.ticker = _ticker[0];
      this.loading = false;
    })
  }

  returnToTickersList(id : string){
    this.router.navigate(['/']);
  }

}
