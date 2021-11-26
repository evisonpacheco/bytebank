import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  add(transfer: any) {
    this.handleData(transfer);

    this.transferList.push(transfer);
  }

  private handleData(transfer: any) {
    transfer.data = new Date();
  }

}
