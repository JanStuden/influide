import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceiptService } from '../services/receipt.service';
import * as groceries from '../../assets/data/lebensmittel.json';
import * as inflationRates from '../../assets/data/inflation.json';
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

  private groceries = groceries;
  private inflationRates: any = inflationRates;

  constructor(
    private receiptService: ReceiptService,
    private route: ActivatedRoute,
    private savingService: SavingService
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
    let referenceInflation = 19.4;

    let totalPrice = 0;
    // Sum of all pricePerIngredients
    for (let ingridient of this.ingridients) {
      if (ingridient.ignore !== true) {
        let unitPrice = this.getUnitPrice(ingridient.name).price;

        totalPrice += ingridient.internalAmount * unitPrice;
      }
    }

    let inflationSum = 0;
    for (let ingridient of this.ingridients) {
      if (ingridient.ignore !== true) {
        let ingredientReference = this.getUnitPrice(ingridient.name);
        let unitPrice = ingredientReference.price;

        let weightingFactor = unitPrice / totalPrice;

        let ingredientInflation =
          this.inflationRates[ingredientReference.category].inflation;

        let weightedInflatedPrice = weightingFactor * ingredientInflation;

        inflationSum += weightedInflatedPrice;
      }
    }

    this.saving = (referenceInflation - inflationSum).toFixed(1);
  }

  private getUnitPrice(name: string): any {
    return this.groceries.groceries.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );
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
