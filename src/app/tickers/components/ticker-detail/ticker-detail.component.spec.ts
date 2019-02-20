import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerDetailComponent } from './ticker-detail.component';
import { MatProgressSpinnerModule, MatToolbarModule, MatDividerModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TickerDetailComponent', () => {
  let component: TickerDetailComponent;
  let fixture: ComponentFixture<TickerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerDetailComponent ],
      imports: [
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatDividerModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
