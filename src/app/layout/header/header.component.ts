import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: IUser | undefined;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.user = this._authService.isAuthValue;
  }

  logout(): void {
    this._authService.logout();
  }
}
