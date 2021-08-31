import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers: any;
  router: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.drivers = this.data.getAllDrivers();
  }

  /*
  onSubmit(myForm: NgForm){
    const formValue = this.driverForm.value;
    const driver = new this.drivers(
      myForm.value["fullName"],
      myForm.value["pays"],
      myForm.value["coverImage"],
      myForm.value["discipline"],
    );
    
  }
  */

}