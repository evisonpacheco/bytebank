import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferStatement: any[] = [];

  constructor(private service: TransferService) {

  }

  transfer($event) {
    console.log($event);
  }
}
