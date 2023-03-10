import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage!: string;
  loading: boolean = false;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      user: 'test',
      pass: '123',
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true
    this._authService
      .login(this._getValueForm('user'), this._getValueForm('pass'))
      .subscribe({
        complete: () => setTimeout(() => this.loading = false, 2000),
        error: (err) => (this.errorMessage = err.message),
      });
  }

  private _getValueForm(inputName: string) {
    return this.form.get(inputName)!.value;
  }
}
