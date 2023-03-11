import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@core/guards/auth-guard.service';
import { LayoutComponent } from '@core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((l) => l.HomeModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth/login/login.module').then((l) => l.LoginModule),
    data: { title: 'Login' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
