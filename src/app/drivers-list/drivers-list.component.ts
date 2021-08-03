import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(inputValue: any){
    console.log("inputValue")
  }
  onSurvole(){
    alert("Survol de la zone!")
  }

}
