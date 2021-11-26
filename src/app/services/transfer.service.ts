import { Transferencia } from './../models/transfer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  allTransfers(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  add(transfer: any) {
    this.handleData(transfer);

    this.transferList.push(transfer);
  }

  private handleData(transfer: any) {
    transfer.data = new Date();
  }

}
