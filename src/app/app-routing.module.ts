import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { OwnReceiptComponent } from './own-receipt/own-receipt.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'receipt/:id',
    component: DetailComponent,
  },
  {
    path: 'savings',
    component: SavingsComponent,
  },
  {
    path: 'ownReceipt',
    component: OwnReceiptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
