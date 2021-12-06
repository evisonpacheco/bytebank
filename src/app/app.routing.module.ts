import { newTransferComponent } from './newTransfer/newTransfer.component';
import { StatementComponent } from './statement/statement.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: StatementComponent },
  { path: 'nova-transferencia', component: newTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
