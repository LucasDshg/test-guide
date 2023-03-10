import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './service/home.service';
import { IHomeData, IQuotes } from './interfaces/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data!: IHomeData;
  dataChart!: { times: number[]; quotes: IQuotes };
  
  get quote() {
    return this.data!.chart.result[0].indicators.quote[0];
  }
  get timestamp() {
    return this.data!.chart.result[0].timestamp.slice();
  }

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this._initData();
  }

  mapChartData() {
    this.dataChart = {
      quotes: this.quote,
      times: this.timestamp,
    };
  }

  private _initData(): void {
    this._homeService.getData('PETR4.SA').subscribe((res) => {
      this.data = res;
      this.mapChartData();
    });
  }
}
