import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  @Input() data:any[]=[];
  @Output() selectOption  = new EventEmitter;
  selectedCategory: string = 'all';


  getOpition(event:any){
    this.selectOption.emit(this.selectedCategory);
  }

}
