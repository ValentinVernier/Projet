import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate: any;


  cars:any = this.data.getAllCars();


  constructor(private data:DataService) {}

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

  isNotAvailable(){
    return false;
  }


}
