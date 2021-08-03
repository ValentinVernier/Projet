import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


  // exemples d'interpolation
  mardiMatin:any = "Ils ont l'air bien OFF";
  age:number = 13;

  //2eme exemple objet ou propriété
    game:any = {
      title:"BF 2042",
      support: "Xbox Serie X",
      multi: 128
    };

  constructor() { }

  ngOnInit(): void {
  }

  // Interpolation du retour d'une méthode
  getStock(){
    return 2050;
  }

  

}
