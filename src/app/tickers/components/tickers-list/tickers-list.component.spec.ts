import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickersListComponent } from './tickers-list.component';
import { MatPaginatorModule, MatGridListModule, MatToolbarModule, MatDividerModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatIconModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TickerComponent } from './ticker/ticker.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TickersService } from '../../services/tickers.service';
import { TickersServiceMock } from '../../mocks/tickers.mock';

describe('TickersListComponent', () => {
  let component: TickersListComponent;
  let fixture: ComponentFixture<TickersListComponent>;
  let tickersService: TickersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickersListComponent, TickerComponent ],
      imports: [
        MatPaginatorModule,
        MatGridListModule,
        MatToolbarModule,
        MatDividerModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        {provide: TickersService, useClass: TickersServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tickersService = TestBed.get(TickersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
