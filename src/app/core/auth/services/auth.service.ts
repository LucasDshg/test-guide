import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  of,
  throwError,
} from 'rxjs';
import { IUser } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuth$ = new BehaviorSubject<IUser | undefined>(undefined);

  get isAuth(): Observable<IUser | undefined> {
    return this._isAuth$.asObservable().pipe(distinctUntilChanged());
  }

  get isAuthValue(): IUser | undefined {
    return this._isAuth$.value ?? this._getSession();
  }

  constructor(private _router: Router) {}

  login(username: string, pass: string) {
    return of(username === 'test' && pass === '123').pipe(
      map((res) => {
        if (res) {
          const data = {
            id: 1,
            name: 'Usuário de test',
          };
          this._isAuth$.next(data);
          this._addSession();
          setTimeout(() => this._router.navigateByUrl('/'), 2000);

          return data;
        }
        throw new Error('Usuário ou senha inválida!');
      })
    );
  }

  logout() {
    this._isAuth$.next(undefined);
    this._clearSession();
    this._router.navigateByUrl('/login');
  }

  private _addSession() {
    sessionStorage.setItem('user', JSON.stringify(this.isAuthValue as IUser));
  }

  private _getSession() {
    const session = sessionStorage.getItem('user');
    if (session) return JSON.parse(session) as IUser;
    return undefined;
  }
  private _clearSession() {
    sessionStorage.removeItem('user');
  }
}
