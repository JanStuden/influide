import { Injectable } from '@angular/core';
import * as inflationRates from '../../assets/data/inflation.json';
import * as groceries from '../../assets/data/lebensmittel.json';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private inflationRates: any = inflationRates;
  private groceries: any = groceries;

  constructor() {}

  calculateReceiptSaving(ingridients: any) {
    let referenceInflation = 19.4;

    let totalPrice = 0;
    // Sum of all pricePerIngredients
    for (let ingridient of ingridients) {
      if (ingridient.ignore !== true) {
        let unitPrice = this.getUnitPrice(ingridient.name).price;

        totalPrice += ingridient.internalAmount * unitPrice;
      }
    }

    let inflationSum = 0;
    for (let ingridient of ingridients) {
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

    return referenceInflation - inflationSum;
  }

  private getUnitPrice(name: string): any {
    return this.groceries.groceries.find(
      (e: any) => e.name.toLowerCase() === name.toLowerCase()
    );
  }
}
