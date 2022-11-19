import { Component, OnInit } from '@angular/core';
import { SavingService } from '../services/saving.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent implements OnInit {
  public savings: any;
  public totalSavings: number = 12;

  constructor(private savingService: SavingService) {}

  ngOnInit(): void {
    this.savings = this.savingService.getSavings();

    this.savings.forEach((element: any) => {
      this.totalSavings += +element.saving;
    });
  }
}
