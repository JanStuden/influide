import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavingService {
  constructor() {}

  getSavings() {
    let savings = localStorage.getItem('savings');

    return savings ? JSON.parse(savings) : [];
  }

  addSaving(receipt: any) {
    let savings = this.getSavings();

    if (!savings.find((e: any) => e.id === receipt.id)) {
      savings.push(receipt);

      localStorage.setItem('savings', JSON.stringify(savings));
    }
  }

  removeSaving(receipt: any) {
    let savings = this.getSavings();

    savings = savings.filter((e: any) => e.id !== receipt.id);

    localStorage.setItem('savings', JSON.stringify(savings));
  }
}
