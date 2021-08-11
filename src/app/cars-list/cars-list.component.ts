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

  ngOnInit(): void {
    this.carUpdate = new Date();
    this.cars = this.data.getAllCars();
  }

  isNotAvailable(){
    return false;
  }


}
