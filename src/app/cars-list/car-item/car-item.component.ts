import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
 
  bookingMessage:string = "Reservez maintenant!";
  isBooked:boolean = false;
  
  @Input() car!:Car; 

  constructor() { }


  ngOnInit(): void {
  }

  onBooking(){
    this.isBooked = true;
    this.bookingMessage="Cette voiture est maintenant réservée!"

  }


}
