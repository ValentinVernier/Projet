import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  btn: boolean = false;

  onClickButton(){
   this.btn = true;
   alert("Vous avez réservé cette voiture!");
  }
  
  @Input() car:any;

  constructor() { }

  ngOnInit(): void {
  }

}
