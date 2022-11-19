import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public view = [700, 300];
  public data;
  public receipts: any;
  public receiptCategory = ["vegetarian", "vegan", "noodles", "rice", "fish", "meat"]
  public group: any;
  public searchQuery : string;
  private selectedArray :any = []
  

  constructor(
    private _renderer: Renderer2,
    private _el: ElementRef,
    private receiptService: ReceiptService,
    
  ) {
    this.data = [
      {
        name: 'Rice',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 1.3,
            name: 'February',
          },
          {
            value: 1.7,
            name: 'March',
          },
          {
            value: 8.0,
            name: 'April',
          },
          {
            value: 12.9,
            name: 'May',
          },
          {
            value: 13.8,
            name: 'June',
          },
          {
            value: 15.2,
            name: 'July',
          },
          {
            value: 22.2,
            name: 'August',
          },
          {
            value: 23.0,
            name: 'September',
          },
          {
            value: 26.1,
            name: 'October',
          },
        ],
      },
      {
        name: 'Noodles',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 1.9,
            name: 'February',
          },
          {
            value: 6.4,
            name: 'March',
          },
          {
            value: 13.6,
            name: 'April',
          },
          {
            value: 22.5,
            name: 'May',
          },
          {
            value: 24.7,
            name: 'June',
          },
          {
            value: 21.4,
            name: 'July',
          },
          {
            value: 24.7,
            name: 'August',
          },
          {
            value: 25.2,
            name: 'September',
          },
          {
            value: 26.0,
            name: 'October',
          },
        ],
      },
      {
        name: 'Bread',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 1.4,
            name: 'February',
          },
          {
            value: 2.7,
            name: 'March',
          },
          {
            value: 5.7,
            name: 'April',
          },
          {
            value: 7.6,
            name: 'May',
          },
          {
            value: 9.3,
            name: 'June',
          },
          {
            value: 11.0,
            name: 'July',
          },
          {
            value: 10.8,
            name: 'August',
          },
          {
            value: 13.1,
            name: 'September',
          },
          {
            value: 15.1,
            name: 'October',
          },
        ],
      },
      {
        name: 'Beef',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 1.6,
            name: 'February',
          },
          {
            value: 10.6,
            name: 'March',
          },
          {
            value: 28.7,
            name: 'April',
          },
          {
            value: 34.6,
            name: 'May',
          },
          {
            value: 34.1,
            name: 'June',
          },
          {
            value: 34.2,
            name: 'July',
          },
          {
            value: 36.3,
            name: 'August',
          },
          {
            value: 37.9,
            name: 'September',
          },
          {
            value: 40.6,
            name: 'October',
          },
        ],
      },
      {
        name: 'Fruits',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: -0.1,
            name: 'February',
          },
          {
            value: 0.6,
            name: 'March',
          },
          {
            value: 1.6,
            name: 'April',
          },
          {
            value: 1.5,
            name: 'May',
          },
          {
            value: 2.4,
            name: 'June',
          },
          {
            value: 1.6,
            name: 'July',
          },
          {
            value: 2.9,
            name: 'August',
          },
          {
            value: 4.7,
            name: 'September',
          },
          {
            value: 3.8,
            name: 'October',
          },
        ],
      },
      {
        name: 'Fruits',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 4.8,
            name: 'February',
          },
          {
            value: 4.8,
            name: 'March',
          },
          {
            value: 9.3,
            name: 'April',
          },
          {
            value: 3.0,
            name: 'May',
          },
          {
            value: -1.8,
            name: 'June',
          },
          {
            value: -0.8,
            name: 'July',
          },
          {
            value: 0.6,
            name: 'August',
          },
          {
            value: 5.5,
            name: 'September',
          },
          {
            value: 12.3,
            name: 'October',
          },
        ],
      },
      {
        name: 'Average Food Inflation',
        series: [
          {
            value: 0,
            name: 'January',
          },
          {
            value: 1.2,
            name: 'February',
          },
          {
            value: 2.2,
            name: 'March',
          },
          {
            value: 6.5,
            name: 'April',
          },
          {
            value: 9.1,
            name: 'May',
          },
          {
            value: 10.4,
            name: 'June',
          },
          {
            value: 13.3,
            name: 'July',
          },
          {
            value: 15.3,
            name: 'August',
          },
          {
            value: 17.7,
            name: 'September',
          },
          {
            value: 19.4,
            name: 'October',
          },
        ],
      },
    ];
  }

  ngAfterViewInit() {
    const line = this._el.nativeElement.querySelectorAll('.line')[6];
    this._renderer.setStyle(line, 'stroke-dasharray', '50px');
    this._renderer.setStyle(line, 'stroke-width', '8px');
  }
  ngOnInit(): void {
    this.loadReceipts();
  }

  loadReceipts() {
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      this.receipts = Object.entries(receipts);
    });
  }

  filterReceipts(){
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      this.receipts = Object.entries(receipts);
      
      this.receipts=this.receipts.filter((e:any) => {
        let output=this.selectedArray.every((element:any) => {
            console.log("vorhandene Kat: " + e[1].category)
            console.log("element: "+ element)
            // console.log(this.receipts[0][1].category.includes(element))
            return e[1].category.includes(element)
        })
        console.log(output)
        return output;
      });
      
    });
  }
  onFilterChange(event:any){
    
    if( event.value[0]!==undefined && !this.selectedArray.includes(event.value[0])){
      this.selectedArray.push(event.value[0])
    }
    else{
      this.selectedArray=this.selectedArray.filter((e:any)=> e !== event.source.value)
    }
  }
  onKey(){
    this.receiptService.getReceipts().subscribe((receipts: any) => {
      this.receipts = Object.entries(receipts);
      this.receipts=this.receipts.filter((e:any) => {
        return e[1].name.toLowerCase().includes(this.searchQuery.toLowerCase())
        console.log(e[1].name.includes(this.searchQuery))
      });
    });
  }
   
}
