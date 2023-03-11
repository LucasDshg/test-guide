import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, of } from 'rxjs';
import { AuthStateService } from '../states/auth.states';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router, private _authState: AuthStateService) {}

  login(username: string, pass: string) {
    return of(username === 'test' && pass === '123').pipe(
      delay(2000),
      map((res) => {
        if (res) {
          const data = {
            id: 1,
            name: 'Usuário de test',
          };
          this._authState.auth = data;

          this._router.navigateByUrl('/');

          return data;
        }
        throw new Error('Usuário ou senha inválida!');
      }),
    );
  }

  logout() {
    this._authState.auth = undefined;
    this._authState.clearSession();
    this._router.navigateByUrl('/login');
  }
}
