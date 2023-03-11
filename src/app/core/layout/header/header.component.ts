import { Component, OnInit } from '@angular/core';
import { IUser } from '@core/auth/interfaces/auth.interface';
import { AuthService } from '@core/auth/services/auth.service';
import { AuthStateService } from '@core/auth/states/auth.states';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: IUser | undefined;

  constructor(
    private _authService: AuthService,
    private _authStates: AuthStateService,
  ) {}

  ngOnInit(): void {
    this.user = this._authStates.isAuthValue;
  }

  logout(): void {
    this._authService.logout();
  }
}
