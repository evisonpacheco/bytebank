import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transfer.model';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss']
})

export class newTransferComponent {

  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  constructor(private service: TransferService) { }

  transfer() {
    console.log('Solicitada nova transferência');

    const valueEmit: Transferencia = { valor: this.value, destino: this.destination };

    this.service.add(valueEmit)
      .subscribe(result => {
        console.log(result);
        this.clearInputs();
      },
        error => console.log(error));
  }

  clearInputs() {
    this.value = null;
    this.destination = null;
  }
}
