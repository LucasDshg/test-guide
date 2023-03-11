interface ICurrentTradingPeriod {
  timezone: string;
  start: number;
  end: number;
  gmtoffset: number;
}

export interface IQuotes {
  open: number[];
  low: number[];
  high: number[];
  volume: number[];
  close: number[];
  variation?: number[];
  variationInitial?: number[];
}

export interface IHomeData {
  chart: {
    result: [
      {
        meta: {
          currency: string;
          symbol: string;
          exchangeName: string;
          instrumentType: string;
          firstTradeDate: number;
          regularMarketTime: number;
          gmtoffset: number;
          timezone: string;
          exchangeTimezoneName: string;
          regularMarketPrice: number;
          chartPreviousClose: number;
          previousClose: number;
          scale: number;
          priceHint: number;
          currentTradingPeriod: {
            pre: ICurrentTradingPeriod;
            regular: ICurrentTradingPeriod;
            post: ICurrentTradingPeriod;
          };
          tradingPeriods: ICurrentTradingPeriod[];
          dataGranularity: string;
          range: string;
          validRanges: string[];
        };
        timestamp: number[];
        indicators: {
          quote: IQuotes[];
        };
      },
    ];
    error: null;
  };
}
