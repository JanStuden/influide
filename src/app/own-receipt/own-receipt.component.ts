import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import * as groceries from '../../assets/data/lebensmittel.json';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-own-receipt',
  templateUrl: './own-receipt.component.html',
  styleUrls: ['./own-receipt.component.scss'],
})
export class OwnReceiptComponent {
  productForm: FormGroup;
  ingredientsArray: any = [];
  private groceries: any = groceries;
  private ingriedientsAmountArray: any = [];
  public inflation: number = 0.0;

  constructor(
    private fb: FormBuilder,
    private calculationService: CalculationService
  ) {
    this.groceries.groceries.forEach((element: any) => {
      this.ingredientsArray.push(element.name);
    });

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newRow(): FormGroup {
    return this.fb.group({
      name: '',
      internalAmount: 0,
    });
  }

  addRow() {
    this.quantities().push(this.newRow());
  }

  removeRow(i: number) {
    this.quantities().removeAt(i);

    if (this.quantities().length > 0) {
      this.calc();
    } else {
      this.inflation = 0;
    }
  }

  calc() {
    this.ingriedientsAmountArray = [];
    this.productForm.value.quantities.forEach((element: any) => {
      this.ingriedientsAmountArray.push(element);
    });
    this.inflation = this.calculationService.calculateReceiptSaving(
      this.ingriedientsAmountArray
    )
    if (this.inflation == Number.NEGATIVE_INFINITY) {
      this.inflation = 0;
    }
  }
}
