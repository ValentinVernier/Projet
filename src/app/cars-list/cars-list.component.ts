import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate: any;


  cars:Car[] | undefined; 


  constructor(private data:DataService) {}

  flowerCar:Car = new Car("FlowerCar", "England", "https://i.pinimg.com/474x/65/20/9a/65209a5aa7e4f4a50da38dd1c5b1123b.jpg", null, 19.5)



  ngOnInit(): void {
    this.carUpdate = new Date();
    this.cars = this.data.getAllCars();
    this.data.cars.push(this.flowerCar)
  }

  isNotAvailable(){
    return false;
  }


}
