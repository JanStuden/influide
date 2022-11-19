import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private id: string; 
  public ingridients: Array<any>
  public instructions: string

  constructor(private receiptService: ReceiptService) {
    this.id = "1"
  }

  ngOnInit(): void {
    this.parseReceipt();
  }

  private parseReceipt() {
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      let receipt = receipts[this.id]

      this.ingridients = receipt.ingridients
      this.instructions = receipt.instructions
    });
  }
}
