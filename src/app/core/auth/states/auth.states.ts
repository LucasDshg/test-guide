import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';
import { IUser } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _isAuth$ = new BehaviorSubject<IUser | undefined>(undefined);

  get isAuth(): Observable<IUser | undefined> {
    return this._isAuth$.asObservable().pipe(distinctUntilChanged());
  }

  get isAuthValue(): IUser | undefined {
    return this._isAuth$.value ?? this.session;
  }

  set auth(value: IUser | undefined) {
    this._isAuth$.next(value);
    this.addSession();
  }
  addSession() {
    sessionStorage.setItem('user', JSON.stringify(this.isAuthValue as IUser));
  }

  get session() {
    const session = sessionStorage.getItem('user');
    if (session) return JSON.parse(session) as IUser;
    return undefined;
  }
  clearSession = () => sessionStorage.removeItem('user');
}
