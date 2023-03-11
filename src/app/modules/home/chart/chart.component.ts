import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IQuotes } from '../interfaces/home.interface';
import { calcVariation, timestapToDate } from '@utils/functions';

@Component({
  selector: 'app-chart',
  template: `<div
    id="chart_guide"
    [style.width.%]="100"
    [style.height]="'var(--layout-content-height)'"
  ></div>`,
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() data!: { times: number[]; quotes: IQuotes };
  chart!: Highcharts.Chart;
  color!: string;

  constructor() {}
  ngOnInit(): void {
    this._color();
  }

  ngAfterViewInit(): void {
    this._createChart('chart_guide', this._chartOptions());
  }

  private _createChart(element: string | HTMLElement, options: object) {
    this.chart = Highcharts.chart(element, {
      ...options,
      credits: {
        enabled: false,
      },
    });
  }

  private _color(): void {
    if (this.color) return;
    this.color =
      calcVariation(this.getCloseValue(1), this.getCloseValue(2)) > '0'
        ? '#67d286'
        : '#ff004e';
  }

  private getCloseValue(length: number): number {
    return this.data.quotes.close[this.data.quotes.close.length - length];
  }

  private _chartOptions(): object {
    return {
      chart: {
        zoomType: 'x',
        backgroundColor: 'transparent',
      },
      title: {
        text: '',
      },
      tooltip: {
        enabled: true,
        shared: true,
        useHTML: true,

        formatter: function (): any {
          const _this = this as any;
          return `
          <span> ${_this.x}</span>
          <br>
          <span>Close: ${(_this.points[1].y as number).toFixed(2)}</span>

          `;
        },
      },
      xAxis: {
        type: 'datetime',
        crosshair: true,
        categories: this.data.times.map((time) => timestapToDate(time)),
      },
      yAxis: [
        {
          title: {
            text: '',
          },
          crosshair: true,
        },
        {
          title: {
            text: '',
          },
          height: 240,
          top: '66%',
          opposite: true,
          visible: false,
        },
      ],
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, this.color],
              [1, Highcharts.color(this.color).setOpacity(0).get('rgba')],
            ],
          },
          marker: {
            enabled: false,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          type: 'column',
          yAxis: 1,
          data: this.data.quotes.volume,
          turboThreshold: 1000,
          color: this.color,
        },
        {
          type: 'area',
          data: this.data.quotes.close,
          turboThreshold: 1000,
          color: this.color,
        },
      ],
    };
  }
}
