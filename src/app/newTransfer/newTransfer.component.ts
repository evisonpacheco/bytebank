import { Component } from '@angular/core';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss']
})

export class newTransferComponent {

  value: number;
  destination: number;

  transfer() {
    console.log('Solicitada nova transferência');
    console.log('Valor:', this.value);
    console.log('Destino:', this.destination);
  }
}
