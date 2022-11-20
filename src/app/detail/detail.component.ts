import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalculationService } from '../services/calculation.service';
import { ReceiptService } from '../services/receipt.service';
import { SavingService } from '../services/saving.service';

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
  public receipt: any;
  public saving: string;
  public savingNumber: number;

  constructor(
    private receiptService: ReceiptService,
    private route: ActivatedRoute,
    private savingService: SavingService,
    private calculationService: CalculationService
  ) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.parseReceipt();
  }

  public decreasePortions() {
    if (this.portions > 1) {
      this.portions = this.portions - 1;
    }
  }

  private parseReceipt(): void {
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      let receipt = receipts[this.id];
      this.receipt = receipt;

      this.ingridients = receipt.ingridients;
      this.instructions = receipt.instructions;

      this.calculateSaving();
    });
  }

  private calculateSaving() {
    let saving = this.calculationService.calculateReceiptSaving(
      this.ingridients
    );

    this.savingNumber = saving;
    this.saving = saving.toFixed(1);
  }

  public addSaving() {
    let receipt = {
      id: this.id,
      name: this.receipt.name,
      saving: this.saving,
    };
    this.savingService.addSaving(receipt);
  }
}
