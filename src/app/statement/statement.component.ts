import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  transferStatement: any[];

  constructor(private service: TransferService) { }

  ngOnInit() {
    this.transferStatement = this.service.transfers;
  }

}
