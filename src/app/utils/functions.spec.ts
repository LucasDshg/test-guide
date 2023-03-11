import { TestBed } from '@angular/core/testing';
import { randomId, timestapToDate } from './functions';
import { PT_BR } from '../shared/constants/language.constant';
import { CommonModule } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

describe('Valid Funtions', () => {
  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [PT_BR],
    });
    registerLocaleData(localePtBr);
  });

  it('should be return random id ', () => {
    expect(randomId('button')).toBeInstanceOf(String);
  });

  it('should be return date formatted ', () => {
    const fun = timestapToDate(1646917200, 'dd/MM/yyyy', PT_BR);

    expect(fun).toBeInstanceOf(String);
    expect(fun).toEqual('10/03/2022');
  });
});
