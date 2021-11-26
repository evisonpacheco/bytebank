import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newTransfer',
  templateUrl: './newTransfer.component.html',
  styleUrls: ['./newTransfer.component.scss']
})

export class newTransferComponent {

  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  transfer() {
    console.log('Solicitada nova transferência');

    const valueEmit = { value: this.value, destination: this.destination };
    this.onTransfer.emit(valueEmit);

    this.clearInputs();
  }

  clearInputs() {
    this.value = null;
    this.destination = null;
  }
}
