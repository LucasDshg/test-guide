import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  public canActivate(): boolean {
    if (!this._authService.isAuthValue) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
