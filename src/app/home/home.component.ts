import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public view = [700, 300];
  public data;
  public receipts: any;

  constructor(private receiptService: ReceiptService) {
    this.data = [
      {
        name: 'Rice',
        series: [
          {
            value: 126.3,
            name: 'July',
          },
          {
            value: 127.7,
            name: 'August',
          },
          {
            value: 134.7,
            name: 'September',
          },
          {
            value: 135.5,
            name: 'October',
          },
          {
            value: 138.6,
            name: 'November',
          },
        ],
      },
      {
        name: 'Noodles',
        series: [
          {
            value: 114.2,
            name: 'July',
          },
          {
            value: 113.9,
            name: 'August',
          },
          {
            value: 110.5,
            name: 'September',
          },
          {
            value: 109.1,
            name: 'October',
          },
          {
            value: 105.4,
            name: 'November',
          },
        ],
      },
      {
        name: 'Tomatos',
        series: [
          {
            value: 125.4,
            name: 'July',
          },
          {
            value: 122.6,
            name: 'August',
          },
          {
            value: 127.8,
            name: 'September',
          },
          {
            value: 126.8,
            name: 'October',
          },
          {
            value: 135.7,
            name: 'November',
          },
        ],
      },
      {
        name: 'Bread',
        series: [
          {
            value: 102.0,
            name: 'July',
          },
          {
            value: 100.9,
            name: 'August',
          },
          {
            value: 99.4,
            name: 'September',
          },
          {
            value: 110.5,
            name: 'October',
          },
          {
            value: 120.3,
            name: 'November',
          },
        ],
      },
      {
        name: 'Lettuce',
        series: [
          {
            value: 135.8,
            name: 'July',
          },
          {
            value: 135.3,
            name: 'August',
          },
          {
            value: 125.1,
            name: 'September',
          },
          {
            value: 125.6,
            name: 'October',
          },
          {
            value: 130.8,
            name: 'November',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {
    this.loadReceipts();
  }

  loadReceipts() {
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      this.receipts = Object.entries(receipts);
    });
  }
}
