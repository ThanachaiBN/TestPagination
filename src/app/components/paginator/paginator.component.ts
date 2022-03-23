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
  seletePageSize: number = this.pageSize[0]; //เก็บค่าPageSize เริ่มต้นให้เท่ากับ 10
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

  plusPage(): void { //กดเลื่อนไปด้ายขวา
    if (this.seletePageNo < this.pageNumber) {
      this.seletePageNo = this.seletePageNo + 1;

      // console.log(this.seletePageNo)
      if (this.seletePageNo >= this.maxPageNumber) {
        this.statusPage = true //เช็ตเพื่อกำหนดเเสดงเครื่องหมาย ...
      }
    } else {
      console.log(this.seletePageNo)
    }

    if (this.seletePageNo > this.maxPageNumber && this.nextPageNumber <= this.pageNumber - 6 ) {
      this.nextPageNumber++
      console.log(this.nextPageNumber)
    }

    this.onPageEvent(this.seletePageSize);
  }

  minusPage(): void { //กดเลื่อนไปด้านซ้าย
    if (this.seletePageNo > 1) {
      this.seletePageNo = this.seletePageNo - 1;
      console.log(this.seletePageNo)
      if (this.seletePageNo <= 2) {
        this.statusPage = false //เช็ตเพื่อกำหนดเเสดงเครื่องหมาย ...

        console.log(this.nextPageNumber)
      }
    } else {
      console.log(this.seletePageNo)
    }
    this.onPageEvent(this.seletePageSize);
    if (this.seletePageNo <= this.pageNumber-this.maxPageNumber +1  && this.nextPageNumber > 0) {
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
    //คำควณเพื่อเเสดงตัวเลขในเเถบเมนู
    for (let number = 1; number <= this.maxPageNumber; number++) { 
      console.log(number);
      var result = Array({ number });//.fill(i);;
      this.numberArray = this.numberArray.concat(result);
      console.log(this.numberArray);
    }
  }

  clickPageNo(seletePageNo: number):void {
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
