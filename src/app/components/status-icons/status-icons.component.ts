import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-icons',
  templateUrl: './status-icons.component.html',
  styleUrls: ['./status-icons.component.scss']
})
export class StatusIconsComponent implements OnInit {

  @Input() data?: any[];//ยังไม่ได้เเก้ ใส่ type object เเล้ว error 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  // getColor(name:any){
  //   switch (name){
  //     case 'dddd':
  //       return 'red';
  //     case 'usq':
  //       return 'red';
  //   }
  // }

}


