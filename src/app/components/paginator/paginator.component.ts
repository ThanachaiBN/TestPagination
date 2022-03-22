import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() onPageEventChanged: EventEmitter<any> = new EventEmitter();

  statusPage: boolean = false;
  seletePageNo = 1;
  pageSize = [10, 15, 20] //จำนวนข้อมูลใน 1 page
  pageNumber: number = 20; //จำนวนหน้า
  seletePageSize: number = this.pageSize[0];
  numberArray: any = [];
  maxPageNumber: number = 5; //เลขจำนวนหน้าที่ให้เลิอก
  nextPageNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.calculateMaxPageNumber();
    // this.test();
  }

  // counter(i: number) {
  //   return new Array(i);
  //   // console.log(this.test)
  // }

  // seletePageSize(page:number){
  //   const pageSize = page
  //   this.onPageEvent(pageSize)
  // }

  plusPage(): void {
    if (this.seletePageNo < this.pageNumber) {
      this.seletePageNo = this.seletePageNo + 1;

      // console.log(this.seletePageNo)
      if (this.seletePageNo >= this.maxPageNumber) {
        this.statusPage = true
      }
    } else {
      console.log(this.seletePageNo)
    }

    if (this.seletePageNo > this.maxPageNumber && this.nextPageNumber <= this.pageNumber - 6) {
      this.nextPageNumber++
      console.log(this.nextPageNumber)
    }

    this.onPageEvent(this.seletePageSize);
  }

  minusPage(): void {
    if (this.seletePageNo > 1) {
      this.seletePageNo = this.seletePageNo - 1;
      console.log(this.seletePageNo)
      if (this.seletePageNo <= 2) {
        this.statusPage = false

        console.log(this.nextPageNumber)
      }
    } else {
      console.log(this.seletePageNo)
    }
    this.onPageEvent(this.seletePageSize);
    // && this.nextPageNumber >= 0
    if (this.seletePageNo <= this.pageNumber - 4) {
      this.nextPageNumber--
    }
  }

  onPageEvent(pageSize: number): void {
    this.seletePageSize = pageSize
    const page = {
      pageIndex: this.seletePageNo,
      pageSize: this.seletePageSize
    };
    this.onPageEventChanged.emit(page);


  }

  calculateMaxPageNumber(): void {
    // const pageNumber = this.pageNumber
    // const maxPageNumber = 5
    // let resultItem = document.items;
    // let items = [];

    for (let number = 1; number <= this.maxPageNumber; number++) { // iteration over input
      console.log(number)
      var result = Array({ number })//.fill(i);;
      this.numberArray = this.numberArray.concat(result)
      console.log(this.numberArray)
    }
  }

  clickPageNo(seletePageNo: any) {
    this.seletePageNo = seletePageNo
    this.onPageEvent(this.seletePageSize);
  }


  // test(){
  //   const str = ["Hello,", "how", "are", "you", "today?"];
  //   var array = str.split(" ",2); 
  //   // const words = str.split(' ');
  //   // console.log(words[3]);
  //   console.log(lastWord);
  // }


  // calculateQty(document:any) {
  //   let resultItem = document.items;
  //   let items = [];
  //   resultItem.forEach(function (value) {
  //     const result = Array(value.quantity).fill(value);
  //     items = items.concat(result);
  //   });
  //   this.quantityItems = items;
  //   console.log(this.quantityItems);
  // }

}
