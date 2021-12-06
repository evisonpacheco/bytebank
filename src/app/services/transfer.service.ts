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
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(transfer: Transferencia): Observable<Transferencia> {
    this.handleData(transfer);

    return this.httpClient.post<Transferencia>(this.url, transfer);
  }

  private handleData(transfer: any) {
    transfer.data = new Date();
  }

}
