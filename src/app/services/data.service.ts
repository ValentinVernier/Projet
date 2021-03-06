import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  category:string[] = ["gymkhana", "nascar", "rallye", "drag", "formule 1"];

  constructor() { }

  cars:Car[] = [
    {
      name: "pagani huayra",
      country: "Italie" ,
      coverImage:"./assets/img/cars/pagani.jpg",
      power: 765,
      perf: 3.2
    },
    {
      name: "koenigsegg agera rs",
      country: "suède",
      coverImage:"./assets/img/cars/koenigsegg.jpg",
      power: 1383,
      perf: 2.6

    },
    {
      name: "zenvo tsr s",
      country: "danemark",
      coverImage:"./assets/img/cars/zenvo.jpg",
      power: 1200,
      perf: 2.8
    },
    {
      name: "bugatti chiron",
      country: "france",
      coverImage:"./assets/img/cars/bugatti.jpg",
      power: 1500,
      perf: 2.4
    },
    {
      name: "mercedes amg one",
      country: "allemagne",
      coverImage:"./assets/img/cars/mercedes.jpg",
      power: 1000,
      perf: 2.2
    },
    {
      name: "ferrari sf90",
      country: "italie",
      coverImage:"./assets/img/cars/ferrari.jpg",
      power: 1000,
      perf: 2.5
    }

  ]

  drivers: Driver[] =  [
    {
      fullName: "ken block",
      pays: "usa",
      coverImage: "./assets/img/drivers/kenblock.jpg",
      category: "gymkhana",
      likeIts: -1
    },
    {
      fullName: "danica patrick",
      pays: "usa",
      coverImage: "./assets/img/drivers/danicapatrick.jpg",
      category: "nascar",
      likeIts: 3
    },
    {
      fullName: "sebastien loeb",
      pays: "france",
      coverImage: "./assets/img/drivers/Loeb.jpg",
      category: "rallye",
      likeIts: 2
    },
    {
      fullName: "molly taylor",
      pays: "australie",
      coverImage: "./assets/img/drivers/mollytaylor.jpg",
      category: "rallye",
      likeIts: -1
    },
    {
      fullName: "collin mc rae",
      pays: "écosse",
      coverImage: "./assets/img/drivers/colin.jpg",
      category: "rallye",
      likeIts: 0
    },
    {
      fullName: "shirley muldowney",
      pays: "USA",
      coverImage: "./assets/img/drivers/shirleymuldowney.jpg",
      category: "drag",
      likeIts: 1
    },
    {
      fullName: "michael schumacher",
      pays: "allemagne",
      coverImage: "./assets/img/drivers/schumacher.jpg",
      category: "formule 1",
      likeIts: 0
    },
    {
      fullName: "erica enders",
      pays: "usa",
      coverImage: "./assets/img/drivers/ericaenders.jpg",
      category: "drag",
      likeIts: 0
    },
    
  ];

  getAllCars():any {
    return this.cars;
  }

  getAllCategories():any {
    return this.category;
  }

  getAllDrivers():any{
    return this.drivers;
  }

  addCar(car:Car){
    this.cars.push(car);
  }


  addDriver(driver:any){
    this.drivers.push(driver);
  }
  
  sortCarsByBest(nb:number){
    return this.getAllCars().sort((a:any, b:any) => (a.power > b.power ? -1 : 1)).slice(0, nb)

  }

  sortDriversByBest(nb:number){
    return this.getAllDrivers().sort((a:any, b:any) => (a.likeIts > b.likeIts ? -1 : 1)).slice(0, nb)
  }

}