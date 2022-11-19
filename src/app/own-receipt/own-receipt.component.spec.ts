import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnReceiptComponent } from './own-receipt.component';

describe('OwnReceiptComponent', () => {
  let component: OwnReceiptComponent;
  let fixture: ComponentFixture<OwnReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
