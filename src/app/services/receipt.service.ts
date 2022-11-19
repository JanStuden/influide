import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

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
