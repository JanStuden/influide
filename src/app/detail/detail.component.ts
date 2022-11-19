import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private id: string;
  public ingridients: Array<any>;
  public instructions: string;
  public portions: number = 4;
  public defaultPortions: number = 4;

  constructor(private receiptService: ReceiptService) {
    this.id = '1';
  }

  ngOnInit(): void {
    this.parseReceipt();
  }

  public decreasePortions() {
    if (this.portions > 1) {
      this.portions = this.portions - 1;
    }
  }

  private parseReceipt() {
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      let receipt = receipts[this.id];

      this.ingridients = receipt.ingridients;
      this.instructions = receipt.instructions;
    });
  }
}
