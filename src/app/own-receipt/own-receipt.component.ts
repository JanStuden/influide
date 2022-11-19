import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  

@Component({
  selector: 'app-own-receipt',
  templateUrl: './own-receipt.component.html',
  styleUrls: ['./own-receipt.component.scss']
})
export class OwnReceiptComponent implements OnInit {

  productForm: FormGroup;  

  constructor() { }
  

  ngOnInit(): void {
  }
  public addColoumn() {

  }
  public removeColoumn(event:any){

  
  }
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  } 
}
