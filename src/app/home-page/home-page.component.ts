import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string = "Drive-X"
  
  bestDrivers:any = this.data.sortDriversByBest(3);

  bestCars:any = this.data.sortCarsByBest(2);


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.bestDrivers = this.data.sortDriversByBest(3);
    this.bestCars = this.data.sortCarsByBest(2);

  }

}
