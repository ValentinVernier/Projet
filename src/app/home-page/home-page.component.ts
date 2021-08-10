import { Component, OnInit } from '@angular/core';
import { BananeService } from '../services/banane.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string = "Drive-X"

  fruit:any = this.banana.getFruit();

  constructor(private banana:BananeService) { 
    console.log(banana.getFruit())
  }

  ngOnInit(): void {

  }

}
