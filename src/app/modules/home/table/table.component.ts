import { Component, Input, OnInit } from '@angular/core';
import { IQuotes } from '../interfaces/home.interface';
import { calcVariation, timestapToDate } from '@utils/functions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      :host {
        overflow: auto;
        height: var(--layout-content-height);
        display: block;
      }
      .table thead th {
        position: sticky;
        top: 0;
        background-color: var(--bs-body-bg);
      }
    `,
  ],
})
export class TableComponent implements OnInit {
  @Input() data!: { quote: IQuotes; timestamp: number[] } | null;

  get closeValue() {
    return this.data!.quote.close.slice(-30).reverse();
  }
  constructor() {}

  ngOnInit(): void {}

  variation(closeValue: number, lastValue: number) {
    return calcVariation(closeValue, lastValue);
  }

  timeFormat(value: number, format: string = 'shortDate') {
    return timestapToDate(value, format);
  }
}
