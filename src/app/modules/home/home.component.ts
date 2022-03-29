import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/components/filter-button/filter-button-interface';
// import { Filter } from 'src/app/components/filter-button/filter-button.component';
// import { StatusIcon } from 'src/app/components/status-icons/status-icons.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataIcons: object[] = [
    {
      nameIcon:"brightness_1",
      name:"Critical",
      color:"#c42a2e"
    },
    {
      nameIcon:"brightness_1",
      name:"High",
      color:"#f9ff17"
    },
    {
      nameIcon:"brightness_1",
      name:"Medium",
      color:"#9bb94f"
    },
    {
      nameIcon:"brightness_1",
      name:"Low",
      color:"#3080ed"
    },
    {
      nameIcon:"brightness_1",
      name:"test",
      color:""
    }
];

  dataButton: Filter[]=[
    {name: "All",total:10},
    {name: "Activate",total:10},
    {name: "NoActivate",total:10},
    {name: "Activate",total:10},
    {name: "Noctivate",total:10},
    {name: "Activate",total:10},
    {name: "Noctivate",total:10},
    {name: "Activate",total:10},
    {name: "Noctivate",total:10},
    {name: "Activate",total:10},
    {name: "Noctivate",total:10},
    {name: "Activate",total:10}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onPageEventChanged(event: any): void{
    console.log(event);
    
  }

  seleted(event: Filter): void{
    console.log(event);

  }
}
