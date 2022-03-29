import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from './filter-button-interface';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {
  @Input() data?: Filter[];
  @Output() seleted: EventEmitter<any> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClick(data :Filter){
    this.seleted.emit(data);
  }

}

