import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HeaderComponent } from '@core/layout/header/header.component';
import { LayoutComponent } from '@core/layout/layout.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, LayoutComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
