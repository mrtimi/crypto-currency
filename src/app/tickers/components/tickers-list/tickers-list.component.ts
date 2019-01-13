import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { TickersService } from '../../services/tickers.service';
import { Router } from '@angular/router';
import { MatPaginator, MatGridList } from '@angular/material';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css']
})
export class TickersListComponent implements OnInit, AfterContentInit {

  tickers: any;
  loading : boolean = true;
  pageIndex: number = 1;
  pageSize: number = 10;
  startIndex = 0;
  tickersNumebr : number;
  filter = {
    filterValue : "",
    filterKey: ""
  };
  

  searchOptions = [
    { label: 'Any', value: 'search'},
    { label: 'Id', value: 'id'},
    { label: 'Symbol', value: 'symbol'},
    { label: 'Name', value: 'name'}
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 2
  }
  
  constructor(
    private tickersService : TickersService,
    private router: Router,
    private mediaObserver: MediaObserver,
  ) { }
  
  ngOnInit() {
    this.getTickersNumber();
    this.loadTickers(this.startIndex, this.pageSize);
  }

  ngAfterContentInit() {
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  
  getTickersNumber(){
    this.loading = true;
    this.tickersService.getTickersNumber().subscribe(_tickers =>{
      this.tickersNumebr = _tickers.info.coins_num;
      this.loading = false;
    });
  }

  loadTickers(startIndex: number, pageSize: number){
    this.loading = true;
    this.tickersService.getTickersPage(startIndex, pageSize).subscribe(_tickers =>{
      this.tickers = _tickers.data;
      this.loading = false;
    });
  }

  goToTickerDetails(id : string){
    this.router.navigate(['/ticker/' + id]);
  }

  pageChanged(){
    this.filter.filterKey = "";
    this.filter.filterValue = "";
    this.pageIndex = this.paginator.pageIndex;
    this.pageSize = this.paginator.pageSize;
    this.startIndex = this.pageIndex *this.pageSize;
    this.loadTickers(this.startIndex, this.pageSize);
  }

  filterTickers(){
    if(this.filter.filterKey!="" && this.filter.filterValue!=""){
      this.tickers = this.tickers.filter(_ticker => _ticker[this.filter.filterKey].includes(this.filter.filterValue));
    }
  }

  refresh(){
    this.filter.filterKey = "";
    this.filter.filterValue = "";
    this.getTickersNumber();
    this.loadTickers(this.startIndex, this.pageSize);
  }

}
