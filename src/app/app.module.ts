import { newTransferComponent } from './newTransfer/newTransfer.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StatementComponent } from './statement/statement.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent,
    newTransferComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
