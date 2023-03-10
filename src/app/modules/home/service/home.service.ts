import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IHomeData } from '../interfaces/home.interface';

@Injectable()
export class HomeService {
  constructor(private _http: HttpClient) {}

  getData(stock: string) {
    return this._http.get<IHomeData>(
      `${environment.url}/finance/chart/${stock}?interval=1d&range=1y`
    );
  }
}
