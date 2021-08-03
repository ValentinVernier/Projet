import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  vehiculeUn:any= { 
    name : "Mercedes AMG",
    price : 42000 + "€"
  }
  vehiculeDeux:any= { 
    name : "Range Rover Evoque",
    price : 33000 + "€"
  }
  vehiculeTrois:any= { 
    name : "MFerrari F50",
    price : 35000 + "€"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
