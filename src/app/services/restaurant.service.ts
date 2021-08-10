import { Injectable } from '@angular/core';
import { BananeService } from './banane.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string = "le beBio";
  prixResto:number | undefined;
  constructor(private banana:BananeService) { }
  getPrice(){
    return this.banana.prix * 1.4;
  }
}
