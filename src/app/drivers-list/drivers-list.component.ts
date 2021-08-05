import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  /*
  isOnline:boolean = true;

  book:any = {
    title:"Le secret des croisades",
    author: "Thomandrea",
    price: 15
  }

  games:string[] = ["Pes6", "MineCraft", "Shenmue", "Evil Dead"];
*/
  colorOne:string= "purple";

  onOff:any= true;

  marginPts:string = "50px";

  constructor() { }

  ngOnInit(): void {
  
  }

  getColor(){
    return "green";
  }

  onSwitch(){
    if(this.onOff){
      this.onOff =false;
    }else{
      this.onOff=true;
    }
  }


}
