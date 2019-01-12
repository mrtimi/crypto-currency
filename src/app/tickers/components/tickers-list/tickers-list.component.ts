import { Component, OnInit } from '@angular/core';
import { TickersService } from '../../services/tickers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css']
})
export class TickersListComponent implements OnInit {

  tickers: any;
  loading : boolean = true;
  
  constructor(
    private tickersService : TickersService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.tickersService.getTickers().subscribe(_tickers =>{
      this.tickers = _tickers.data;
      this.loading = false;
    });
  }
  
  goToTickerDetails(id : string){
    this.router.navigate(['/ticker/' + id]);
  }
  

}
