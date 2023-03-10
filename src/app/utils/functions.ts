import { formatDate, formatNumber } from '@angular/common';
import { PT_BR } from '../shared/constants/language.constant';

/**
 * Função utilizada para gerar id aleatorios.
 * @param name tipo string
 * @return - Retorna string
 * @example - 'button_201317838'
 *
 * @usageNotes
 *
 * ```ts
 *  const idButton: string = randomId('button')
 *  ...
 * ```
 * ### Nota
 * * In case of error will be throw exception`,
 *
 * @Annotation
 */
export function randomId(name: string): string {
  const array = new Uint32Array(10);
  const id = window.crypto.getRandomValues(array)[0];
  return `${name}_${id}`;
}

export function timestapToDate(
  value: number,
  format: string = 'shortDate',
  locale: string = PT_BR
): string {
  if (!value) return '-';
  return formatDate(1000 * value, format, locale);
}

export function calcVariation(closeValue: number, lastValue: number): string {
  const calc = ((closeValue - lastValue) / lastValue) * 100;

  return isNaN(calc) || calc === 0 ? '-' : formatNumber(calc, PT_BR, '1.2-2');
}
