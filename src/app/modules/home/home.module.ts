import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './service/home.service';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [HomeComponent, TableComponent, ChartComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(HomeRoutes)],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
