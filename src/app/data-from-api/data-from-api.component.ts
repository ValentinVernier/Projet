import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-from-api',
  templateUrl: './data-from-api.component.html',
  styleUrls: ['./data-from-api.component.css']
})
export class DataFromApiComponent implements OnInit {

  response:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>("https://reqres.in/api/user?page=2").subscribe( data => {this.response = data} )
  }

}
