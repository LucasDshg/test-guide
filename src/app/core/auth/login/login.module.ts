import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthRoutes } from './auth.routing';
import { InputTextModule } from 'src/app/shared/components/input-text/input-text-component.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(AuthRoutes),
  ],
  providers: [],
})
export class LoginModule {}
