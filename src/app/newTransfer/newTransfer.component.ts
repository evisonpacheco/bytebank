import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transfer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss']
})

export class newTransferComponent {

  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  constructor(private service: TransferService, private router: Router) { }

  transfer() {
    console.log('Solicitada nova transferência');

    const valueEmit: Transferencia = { valor: this.value, destino: this.destination };

    this.service.add(valueEmit)
      .subscribe(result => {
        console.log(result);
        this.clearInputs();
        this.router.navigateByUrl('extrato');
      },
        error => console.log(error));
  }

  clearInputs() {
    this.value = null;
    this.destination = null;
  }
}
