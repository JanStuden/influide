import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  private receipts: any;

  constructor(private http: HttpClient) {}

  public getReceipts() {
    return this.http.get('./assets/data/receipts.json');
  }
}
