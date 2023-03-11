import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { HomeService } from './service/home.service';
import { TableComponent } from './table/table.component';
import { TooltipsModule } from '@shared/directives/tooltip/tooltips.module';

@NgModule({
  declarations: [HomeComponent, TableComponent, ChartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipsModule,
    RouterModule.forChild(HomeRoutes),
  ],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
